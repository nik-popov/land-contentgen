import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/network/security')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_layout/network/security"!</div>
}
