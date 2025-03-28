import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/network/locations')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_layout/network/locations"!</div>
}
