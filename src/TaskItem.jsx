import { useState } from 'react'
import { useTasksStore } from './store/tasks-store'

function IconEdit() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  )
}
function IconTrash() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
      <path d="M10 11v6M14 11v6" />
      <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
    </svg>
  )
}
function IconCheck() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
function IconX() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}
function IconClock() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}
function IconAlarm() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="13" r="8" />
      <path d="M12 9v4l2 2" />
      <path d="M5 3L2 6M22 6l-3-3" />
    </svg>
  )
}
function IconInboxSm() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
      <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    </svg>
  )
}

export default function TaskItem({ id, name, completed, scheduledTime }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText]   = useState(name)
  const deleteTask = useTasksStore((s) => s.deleteTask)
  const updateTask = useTasksStore((s) => s.updateTask)
  const toggleTask = useTasksStore((s) => s.toggleTask)

  const handleSave = () => {
    if (editText.trim().length === 0) return
    updateTask(id, editText.trim())
    setIsEditing(false)
  }

  const handleCancel = () => {
    setIsEditing(false)
    setEditText(name)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter')  handleSave()
    if (e.key === 'Escape') handleCancel()
  }

  return (
    <div className="task-item">
      <input
        type="checkbox"
        className="task-circle"
        checked={completed}
        onChange={() => toggleTask(id)}
        aria-label={`Mark "${name}" as ${completed ? 'incomplete' : 'complete'}`}
      />

      <div className="task-body">
        {isEditing ? (
          <input
            className="task-edit-input"
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            aria-label="Edit task name"
          />
        ) : (
          <p className="task-name">{name}</p>
        )}

        {scheduledTime && !isEditing && (
          <div className="task-meta">
            <span className="task-meta-time">
              <IconClock />
              {scheduledTime}
            </span>
            <span className="task-meta-alarm">
              <IconAlarm />
            </span>
          </div>
        )}
      </div>

      <div className="task-right">
        {isEditing ? (
          <>
            <button className="task-action-btn" onClick={handleSave} aria-label="Save">
              <IconCheck />
            </button>
            <button className="task-action-btn danger" onClick={handleCancel} aria-label="Cancel">
              <IconX />
            </button>
          </>
        ) : (
          <>
            <div className="task-actions">
              <button className="task-action-btn" onClick={() => setIsEditing(true)} aria-label="Edit task">
                <IconEdit />
              </button>
              <button className="task-action-btn danger" onClick={() => deleteTask(id)} aria-label="Delete task">
                <IconTrash />
              </button>
            </div>
            <span className="task-inbox-label">Inbox</span>
            <span className="task-inbox-icon"><IconInboxSm /></span>
          </>
        )}
      </div>
    </div>
  )
}
