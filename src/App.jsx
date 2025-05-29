import { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });

  const [input, setInput] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (input.trim() === '') return;
    setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
    setInput('');
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const remaining = tasks.filter((task) => !task.completed).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-500 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-md transition-all">
        <h1 className="text-3xl font-extrabold text-center text-indigo-800 mb-6 tracking-wide">
          ✨ Task Manager
        </h1>

        <TaskInput input={input} setInput={setInput} addTask={addTask} />

        <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
          <span>🧠 {remaining} task{remaining !== 1 ? 's' : ''} remaining</span>
          <span className="text-xs text-gray-400">Saved automatically</span>
        </div>

        {tasks.length === 0 ? (
          <div className="text-center text-gray-400 py-10">
            <p className="text-lg">No tasks yet! 💤</p>
            <p className="text-sm">Add something to get started...</p>
          </div>
        ) : (
          <ul className="space-y-2 max-h-64 overflow-y-auto scroll-smooth">
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
