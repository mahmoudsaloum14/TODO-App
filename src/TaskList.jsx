import TaskItem from './TaskItem'
import { useTasksStore } from './store/tasks-store'

export default function TaskList() {
  const tasks = useTasksStore((state) => state.tasks)

  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <p className="empty-state-text">No tasks for today. Add one below.</p>
      </div>
    )
  }

  return (
    <div className="task-list" role="list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          name={task.name}
          completed={task.completed}
          scheduledTime={task.scheduledTime ?? null}
        />
      ))}
    </div>
  )
}
