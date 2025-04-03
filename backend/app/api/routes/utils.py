from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel  # Add this import
from pydantic.networks import EmailStr
from typing import Optional

from app.api.deps import get_current_active_superuser
from app.models import Message
from app.utils import generate_test_email, send_email, render_email_template
from app.core.config import settings
import logging

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