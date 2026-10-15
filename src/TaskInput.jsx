import { useState, useRef } from 'react'
import { useTasksStore } from './store/tasks-store'

function IconPlus() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  )
}

export default function TaskInput() {
  const [isOpen, setIsOpen] = useState(false)
  const [text, setText]     = useState('')
  const [error, setError]   = useState('')
  const addTask = useTasksStore((s) => s.addTask)
  const inputRef = useRef(null)

  const open = () => {
    setIsOpen(true)
    setTimeout(() => inputRef.current?.focus(), 0)
  }

  const close = () => {
    setIsOpen(false)
    setText('')
    setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length === 0) {
      setError('Task name cannot be empty.')
      return
    }
    addTask(text.trim())
    setText('')
    setError('')
    setIsOpen(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') close()
  }

  if (!isOpen) {
    return (
      <button
        id="task-input-field"
        className="add-task-trigger"
        onClick={open}
        aria-label="Add a new task"
      >
        <span className="add-task-plus"><IconPlus /></span>
        Add task
      </button>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="task-form-expanded">
        <input
          ref={inputRef}
          id="task-input-field"
          className="task-form-input"
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value)
            if (error) setError('')
          }}
          onKeyDown={handleKeyDown}
          placeholder="Task name"
          aria-label="New task name"
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? 'task-form-error' : undefined}
        />
        {error && (
          <p className="form-error" id="task-form-error" role="alert">{error}</p>
        )}
        <div className="task-form-actions">
          <button type="submit" className="btn-primary">Add task</button>
          <button type="button" className="btn-secondary" onClick={close}>Cancel</button>
        </div>
      </div>
    </form>
  )
}
