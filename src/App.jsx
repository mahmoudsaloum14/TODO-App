import './App.css'
import TaskInput from './TaskInput'
import TaskList from './TaskList'
import { useTasksStore } from './store/tasks-store'

function IconChevronDown() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}
function IconBell() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  )
}
function IconLayout() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  )
}
function IconCalendar() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}
function IconClose() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}
function IconSliders() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
      <circle cx="8" cy="6" r="2" fill="currentColor" stroke="none" />
      <circle cx="16" cy="12" r="2" fill="currentColor" stroke="none" />
      <circle cx="10" cy="18" r="2" fill="currentColor" stroke="none" />
    </svg>
  )
}
function IconSearch() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  )
}
function IconInbox() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
      <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    </svg>
  )
}
function IconCalendarDay() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <text x="12" y="19" textAnchor="middle" fontSize="8" fill="currentColor" stroke="none" fontWeight="700">T</text>
    </svg>
  )
}
function IconCalendarGrid() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <line x1="3" y1="15" x2="21" y2="15" />
      <line x1="9" y1="10" x2="9" y2="22" />
      <line x1="15" y1="10" x2="15" y2="22" />
    </svg>
  )
}
function IconFilter() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}
function IconBarChart() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
      <line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  )
}
function IconPlus({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  )
}
function IconCircleCheck() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
    </svg>
  )
}
function IconTag() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
  )
}

const NAV_ITEMS = [
  { id: 'search',    label: 'Search',          icon: <IconSearch />,      count: null },
  { id: 'inbox',     label: 'Inbox',            icon: <IconInbox />,       count: 5 },
  { id: 'today',     label: 'Today',            icon: <IconCalendarDay />, count: 4 },
  { id: 'upcoming',  label: 'Upcoming',         icon: <IconCalendarGrid />, count: null },
  { id: 'filters',   label: 'Filters & Labels', icon: <IconFilter />,      count: null },
  { id: 'reporting', label: 'Reporting',        icon: <IconBarChart />,    count: null },
]

export default function App() {
  const tasks = useTasksStore((state) => state.tasks)
  const total = tasks.length

  return (
    <div className="app">

      {/* ── TOP HEADER ─────────────────────────────────── */}
      <header className="app-header">
        <div className="header-left">
          <div className="header-avatar" aria-hidden="true">M</div>
          <div className="header-account">
            <span className="header-account-name">Mahmoudsalou...</span>
            <span className="icon-coral" style={{ display:'flex', color:'var(--text-muted)' }}>
              <IconChevronDown />
            </span>
          </div>
          <button className="header-icon-btn" aria-label="Notifications">
            <IconBell />
          </button>
          <button className="header-icon-btn" aria-label="Toggle sidebar">
            <IconLayout />
          </button>
        </div>

        <div className="header-right">
          <button className="header-btn-outline" aria-label="Connect calendar">
            <IconCalendar />
            Connect calendar
            <span style={{ color:'var(--text-ghost)', display:'flex', marginLeft:2 }}><IconClose /></span>
          </button>
          <button className="header-btn-outline" aria-label="Display options">
            <IconSliders />
            Display
          </button>
        </div>
      </header>

      {/* ── SIDEBAR ────────────────────────────────────── */}
      <aside className="app-sidebar">
        <button
          className="sidebar-add"
          aria-label="Add task"
          onClick={() => document.getElementById('task-input-field')?.focus()}
        >
          <span className="icon-coral"><IconPlus size={18} /></span>
          <span className="sidebar-add-label">Add task</span>
          <span className="icon-coral"><IconTag /></span>
        </button>

        <ul className="sidebar-nav" role="navigation" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <li
              key={item.id}
              className={`nav-item${item.id === 'today' ? ' active' : ''}`}
              role="menuitem"
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
              {item.count !== null && (
                <span className="nav-count">{item.count}</span>
              )}
            </li>
          ))}
        </ul>

        <p className="sidebar-section-title">My Projects</p>
      </aside>

      {/* ── MAIN WORKSPACE ─────────────────────────────── */}
      <main className="app-main">
        <div className="workspace-content">
          <h1 className="workspace-title">Today</h1>
          <div className="workspace-subtitle">
            <IconCircleCheck />
            <span>{total} task{total !== 1 ? 's' : ''}</span>
          </div>

          <TaskList />
          <TaskInput />
        </div>
      </main>

    </div>
  )
}
