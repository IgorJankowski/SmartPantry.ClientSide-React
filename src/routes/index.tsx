import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-8 flex justify-center items-center min-h-screen">
      <h3 className="text-2xl p-4 h-64 font-bold">Welcome Home!</h3>
      <div className="ml-4">yo</div>
    </div>
  )
}