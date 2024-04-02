import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [tasks, setTask] = useState(["Eat", "Rave", "Reapeat"]);
  const [title, setTitle] = useState("");
  const [isGreen, setIsGreen] = useState(false);

  function toggleBackground() {
    setIsGreen(!isGreen);
  }

  const greenContainer = {
    backgroundColor: isGreen ? "green" : "white",
    color: isGreen ? "white" : "black",
  };

  function handleInputChange(event) {
    setTitle(event.target.value);
  }
  function addTask() {
    if (title.trim() !== "") {
      setTask([title, ...tasks]);
      setTitle("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTask(updatedTasks);
  }

  return (
    <div style={greenContainer}>
      <div>
        <h1>Att göra lista</h1>
        <input
          type="text"
          placeholder="Skriv ngt att göra"
          value={title}
          onChange={handleInputChange}
        />
        <button
          className="bg-gray-800 text-white font-semibold py-2 px-4 rounded transform hover:scale-105 hover:bg-gray-700 hover:shadow-lg transition duration-300 ease-in-out"
          onClick={addTask}
        >
          Add
        </button>
      </div>
      <div>
        {tasks.map((task, index) => (
          <div key={index}>
            <div>{task}</div>
            <button
              className="bg-lime-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => deleteTask(index)}
            >
              delete
            </button>
          </div>
        ))}
      </div>
      <button
        className="bg-gray-800 text-white font-semibold py-2 px-4 rounded transform hover:scale-105 hover:bg-gray-700 hover:shadow-lg transition duration-300 ease-in-out"
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </button>
      <button
        onClick={toggleBackground}
        className="text-white bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 font-bold py-2 px-4 rounded"
      >
        Byt bakgrundsfärg
      </button>
    </div>
  );
}

export default App;
