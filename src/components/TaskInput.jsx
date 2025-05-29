function TaskInput({ input, setInput, addTask }) {
  return (
    <div className="flex mb-4 shadow-md">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 p-3 border border-gray-200 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        placeholder="Enter a new task..."
      />
      <button
        onClick={addTask}
        className="bg-indigo-600 text-white px-5 py-3 rounded-r-lg hover:bg-indigo-700 transition font-semibold"
      >
        ➕ Add
      </button>
    </div>
  );
}

export default TaskInput;
