import type { Task, TaskStatus } from '../../api/types'
import { Column } from './Column'
import { TaskCard } from './TaskCard'
import { useState } from 'react'
import { mockTasks } from '../../data/mockTasks'
import { TaskForm } from './TaskForm'


const COLUMNS: { status: TaskStatus; title: string }[] = [
  { status: 'TODO', title: 'À faire' },
  { status: 'DOING', title: 'En cours' },
  { status: 'DONE', title: 'Terminé' },
]

export function Board() {
  const [tasks, setTasks] = useState<Task[]>(mockTasks)
    const onStatusChange = (taskId: string, newStatus: TaskStatus) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === taskId
          ? { ...task, status: newStatus }
          : task
      )
    )
  }

  const onDelete = (taskId: string) => {
    const confirmed = window.confirm(
      'Voulez-vous vraiment supprimer cette tâche ?'
    )

    if (confirmed) {
      setTasks((previousTasks) =>
        previousTasks.filter((task) => task.id !== taskId)
      )
    }
  }
  const onAddTask = (newTask: Task) => {
  setTasks((previousTasks) => [...previousTasks, newTask])
 }
    return (
    <main className="p-6">
      <div className="mb-6">
        <TaskForm onAddTask={onAddTask} />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {COLUMNS.map(({ status, title }) => {
          const columnTasks = tasks.filter(
            (task) => task.status === status
          )

          return (
            <Column
              key={status}
              title={title}
              count={columnTasks.length}
            >
              {columnTasks.length === 0 ? (
                <p className="py-4 text-center text-sm text-slate-500">
                  Aucune tâche
                </p>
              ) : (
                <ul className="space-y-2">
                  {columnTasks.map((task) => (
                    <li key={task.id}>
                      <TaskCard
                        task={task}
                        onStatusChange={onStatusChange}
                        onDelete={onDelete}
                      />
                    </li>
                  ))}
                </ul>
              )}
            </Column>
          )
        })}
      </div>
    </main>
  )
}