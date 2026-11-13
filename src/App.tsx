import { mockTasks } from './data/mockTasks'
import { TaskCard } from './features/tasks/TaskCard'

export default function App() {
  return (
    <div className="mx-auto max-w-md space-y-2 p-6">
      {mockTasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  )
}