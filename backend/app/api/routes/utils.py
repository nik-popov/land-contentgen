from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel  # Add this import
from pydantic.networks import EmailStr
from typing import Optional
from app.api.deps import get_current_active_superuser
from app.models import Message
from app.utils import generate_test_email, send_email, render_email_template
from app.core.config import settings
import logging
from datetime import datetime

router = APIRouter(prefix="/utils", tags=["utils"])

logger = logging.getLogger(__name__)

# Pydantic model for demo request form
class DemoRequestForm(BaseModel):
    first_name: str
    last_name: str
    business_email: EmailStr
    phone_number: str
    company_name: str
    job_title: str
    primary_use_case: str
    other_use_case: Optional[str] = None
    additional_requirements: Optional[str] = None
    preferred_demo_datetime: Optional[str] = None

@router.post(
    "/test-email/",
    dependencies=[Depends(get_current_active_superuser)],
    status_code=201,
)
def test_email(email_to: EmailStr) -> Message:
    """
    Test emails.
    """
    email_data = generate_test_email(email_to=email_to)
    send_email(
        email_to=email_to,
        subject=email_data.subject,
        html_content=email_data.html_content,
    )
    return Message(message="Test email sent")

@router.get("/health-check/")
async def health_check() -> bool:
    return True

@router.post("/demo-request/", status_code=201)
async def submit_demo_request(form_data: DemoRequestForm) -> Message:
    """
    Submit a demo request and send notification email.
    """
    try:
        # Prepare email context with all form data
        email_context = {
            "first_name": form_data.first_name,
            "last_name": form_data.last_name,
            "business_email": form_data.business_email,
            "phone_number": form_data.phone_number,
            "company_name": form_data.company_name,
            "job_title": form_data.job_title,
            "primary_use_case": form_data.primary_use_case,
            "other_use_case": form_data.other_use_case,
            "additional_requirements": form_data.additional_requirements,
            "preferred_demo_datetime": form_data.preferred_demo_datetime
        }

        # Render email content
        html_content = render_email_template(
            template_name="demo_request.html",
            context=email_context
        )

        # Send email and check the return value
        email_success = send_email(
            email_to="form_submission@thedataproxy.com",
            subject=f"New Demo Request from {form_data.company_name}",
            html_content=html_content
        )
        
        # If email failed, raise an exception instead of returning success
        if not email_success:
            logger.error("Demo request email notification failed")
            raise HTTPException(
                status_code=500,
                detail="Failed to submit demo request due to notification error"
            )

        return Message(message="Demo request submitted successfully")

    except Exception as e:
        logger.error(f"Error processing demo request: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail="An error occurred while processing your demo request"
        )

# Pydantic model for contact sales form
class ContactSalesForm(BaseModel):
    first_name: str
    last_name: str
    business_email: EmailStr
    phone_number: str
    company_name: str
    job_title: str
    business_size: str
    budget_range: str
    primary_interest: str
    project_timeline: Optional[str] = None
    requirements: Optional[str] = None
    contact_preference: Optional[str] = None

@router.post("/contact-sales/", status_code=201)
async def submit_contact_sales(form_data: ContactSalesForm) -> Message:
    """
    Submit a sales contact request and send notification email.
    """
    try:
        # Prepare email context with all form data
        email_context = {
            "first_name": form_data.first_name,
            "last_name": form_data.last_name,
            "business_email": form_data.business_email,
            "phone_number": form_data.phone_number,
            "company_name": form_data.company_name,
            "job_title": form_data.job_title,
            "business_size": form_data.business_size,
            "budget_range": form_data.budget_range,
            "primary_interest": form_data.primary_interest,
            "project_timeline": form_data.project_timeline,
            "requirements": form_data.requirements,
            "contact_preference": form_data.contact_preference
        }

        # Render email content
        html_content = render_email_template(
            template_name="contact_sales.html",
            context=email_context
        )

        # Send email to sales team
        email_success = send_email(
            email_to="sales@thedataproxy.com",
            subject=f"New Sales Inquiry from {form_data.company_name}",
            html_content=html_content
        )
        
        # If email failed, raise an exception
        if not email_success:
            logger.error("Sales contact form email notification failed")
            raise HTTPException(
                status_code=500,
                detail="Failed to submit sales inquiry due to notification error"
            )

        return Message(message="Sales inquiry submitted successfully")

    except Exception as e:
        logger.error(f"Error processing sales contact form: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail="An error occurred while processing your sales inquiry"
        )


# Pydantic model for privacy request form
class PrivacyRequestForm(BaseModel):
    full_name: str
    email: EmailStr
    phone_number: Optional[str] = None
    account_id: Optional[str] = None
    request_type: str
    verification_method: str
    additional_details: Optional[str] = None
    # Fields for specific request types
    correction_details: Optional[str] = None
    deletion_reason: Optional[str] = None
    deletion_details: Optional[str] = None

@router.post("/privacy-request/", status_code=201)
async def submit_privacy_request(form_data: PrivacyRequestForm) -> Message:
    """
    Submit a data privacy request and send notification emails.
    """
    try:
        # Prepare email context with all form data
        current_date = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        
        # Generate request reference ID
        import uuid
        request_ref = f"PRV-{uuid.uuid4().hex[:8].upper()}"
        
        email_context = {
            "request_ref": request_ref,
            "submission_date": current_date,
            "full_name": form_data.full_name,
            "email": form_data.email,
            "phone_number": form_data.phone_number,
            "account_id": form_data.account_id,
            "request_type": form_data.request_type,
            "verification_method": form_data.verification_method,
            "additional_details": form_data.additional_details
        }
        
        # Add request specific details
        if form_data.request_type == "rectification":
            email_context["correction_details"] = form_data.correction_details
        elif form_data.request_type == "erasure":
            email_context["deletion_reason"] = form_data.deletion_reason
            email_context["deletion_details"] = form_data.deletion_details
            
        # Create human-readable request type
        request_type_readable = {
            "access": "Access to Personal Data",
            "rectification": "Correction of Personal Data",
            "erasure": "Deletion of Personal Data",
            "restriction": "Restriction of Processing",
            "portability": "Data Portability",
            "objection": "Objection to Processing",
            "consent": "Withdrawal of Consent",
            "other": "Other Privacy-Related Request"
        }.get(form_data.request_type, form_data.request_type)
        
        email_context["request_type_readable"] = request_type_readable

        # Render confirmation email to user
        user_html_content = render_email_template(
            template_name="privacy_request_confirmation.html",
            context=email_context
        )

        # Send confirmation email to user
        user_email_success = send_email(
            email_to=form_data.email,
            subject=f"Your Privacy Request #{request_ref} Has Been Received",
            html_content=user_html_content
        )
        
        # Render notification email to data protection team
        team_html_content = render_email_template(
            template_name="privacy_request_notification.html",
            context=email_context
        )

        # Send notification email to data protection team
        team_email_success = send_email(
            email_to="privacy@thedataproxy.com",
            subject=f"New Privacy Request: {request_type_readable} - #{request_ref}",
            html_content=team_html_content
        )
        
        # If either email failed, log the error but don't fail the request
        if not user_email_success:
            logger.error(f"Failed to send confirmation email to user: {form_data.email}")
            
        if not team_email_success:
            logger.error("Failed to send notification email to privacy team")

        # Store the request in the database
        # This would typically involve creating a record in your database
        # Example: await db.privacy_requests.insert_one({...})
        
        return Message(message=f"Privacy request {request_ref} submitted successfully. We will respond within 30 days.")

    except Exception as e:
        logger.error(f"Error processing privacy request: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail="An error occurred while processing your privacy request"
        )