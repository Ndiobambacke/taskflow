import type { Task, TaskStatus } from '../../api/types'
import { Column } from './Column'
import { TaskCard } from './TaskCard'

interface BoardProps {
  tasks: Task[]
}

const COLUMNS: { status: TaskStatus; title: string }[] = [
  { status: 'TODO', title: 'À faire' },
  { status: 'DOING', title: 'En cours' },
  { status: 'DONE', title: 'Terminé' },
]

export function Board({ tasks }: BoardProps) {
  return (
    <main className="grid gap-4 p-6 md:grid-cols-3">
      {COLUMNS.map(({ status, title }) => {
        const columnTasks = tasks.filter((task) => task.status === status)

        return (
          <Column key={status} title={title} count={columnTasks.length}>
            {columnTasks.length === 0 ? (
              <p className="py-4 text-center text-sm text-slate-500">Aucune tâche</p>
            ) : (
              <ul className="space-y-2">
                {columnTasks.map((task) => (
                  <li key={task.id}>
                    <TaskCard task={task} />
                  </li>
                ))}
              </ul>
            )}
          </Column>
        )
      })}
    </main>
  )
}