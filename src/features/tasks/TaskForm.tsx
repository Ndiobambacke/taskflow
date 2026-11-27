import { useState } from 'react'
import type { Priority, Task } from '../../api/types'

interface TaskFormProps {
  onAddTask: (task: Task) => void
}

export function TaskForm({ onAddTask }: TaskFormProps) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState<Priority>('MEDIUM')
  const [dueDate, setDueDate] = useState('')

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()

  if (title.trim().length < 3) {
    alert('Le titre doit contenir au moins 3 caractères.')
    return
  }

  const today = new Date()
  const todayString =
    `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`

  if (dueDate && dueDate < todayString) {
    alert('La date limite ne peut pas être dans le passé.')
    return
  }

  const newTask: Task = {
    id: Date.now(),
    projectId: 1,
    title: title.trim(),
    description: description.trim(),
    status: 'TODO',
    priority: priority,
    assigneeId: null,
    dueDate: dueDate || null,
    createdAt: new Date().toISOString(),
  }

  onAddTask(newTask)
  setTitle('')
  setDescription('')
  setPriority('MEDIUM')
  setDueDate('')
}

  return (
  <form
  onSubmit={handleSubmit}
  className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
>
    <h2 className="mb-4 text-lg font-semibold">
      Ajouter une tâche
    </h2>

    <div className="mb-4">
      <label htmlFor="title" className="mb-1 block text-sm font-medium">
        Titre
      </label>

      <input
        id="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Ex : Apprendre React"
        className="w-full rounded border border-slate-300 p-2 text-sm"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="description" className="mb-1 block text-sm font-medium">
          Description
       </label>

       <textarea
           id="description"
           value={description}
           onChange={(e) => setDescription(e.target.value)}
           placeholder="Décris brièvement la tâche..."
           className="w-full rounded border border-slate-300 p-2 text-sm"
           rows={3}
        />
    </div>
    <div className="mb-4">
      <label htmlFor="priority" className="mb-1 block text-sm font-medium">
         Priorité
       </label>

       <select
          id="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value as Priority)}
          className="w-full rounded border border-slate-300 p-2 text-sm" >
           <option value="LOW">Basse</option>
           <option value="MEDIUM">Moyenne</option>
           <option value="HIGH">Haute</option>
      </select>
    </div>
    <div className="mb-4">
       <label htmlFor="dueDate" className="mb-1 block text-sm font-medium">
          Date limite
       </label>

      <input
         id="dueDate"
         type="date"
         value={dueDate}
         onChange={(e) => setDueDate(e.target.value)}
         className="w-full rounded border border-slate-300 p-2 text-sm"/>
    </div>
    <button
  type="submit"
  className="w-full rounded bg-blue-600 p-2 text-white hover:bg-green-700"
>
  Ajouter la tâche
</button>
  </form>
)
}