import { Header } from './components/Header'
import { Board } from './features/tasks/Board'
import { mockProject, mockTasks } from './data/mockTasks'

export default function App() {
  return (
    <>
      <Header projectName={mockProject.name} />
      <Board tasks={mockTasks} />
    </>
  )
}