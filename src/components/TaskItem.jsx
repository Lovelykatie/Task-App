function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <li
      className="flex items-center justify-between bg-white shadow-md p-3 rounded-lg hover:shadow-lg transition-all"
    >
      <label className="flex items-center space-x-2 cursor-pointer">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          className="accent-indigo-600 w-4 h-4"
        />
        <span
          className={`text-gray-800 transition-all ${
            task.completed ? "line-through text-gray-400 italic" : ""
          }`}
        >
          {task.text}
        </span>
      </label>
      <button
        onClick={() => deleteTask(task.id)}
        className="text-red-500 hover:text-red-700 font-bold text-lg transition"
        title="Delete task"
      >
        ✕
      </button>
    </li>
  );
}

export default TaskItem;

