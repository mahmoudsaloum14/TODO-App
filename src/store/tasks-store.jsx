import { create } from 'zustand';

export const useTasksStore = create((set) => ({
  tasks: [
    { id: 1, name: 'Meeting at 10pm',                              completed: false, scheduledTime: '19:00' },
    { id: 2, name: 'Select the Skills and subskills of the junior', completed: false, scheduledTime: null },
    { id: 3, name: 'Design The Rag System',                        completed: false, scheduledTime: null },
    { id: 4, name: 'Send Emails to Selected Candidates',           completed: false, scheduledTime: null },
  ],
  addTask: (name) =>
    set((state) => ({
      tasks: [...state.tasks, { id: Date.now(), name, completed: false, scheduledTime: null }],
    })),
  deleteTask: (taskId) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== taskId),
    })),
  updateTask: (taskId, newName) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, name: newName } : task
      ),
    })),
  toggleTask: (taskId) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      ),
    })),
}));
