import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [tasks, setTask] = useState(["Eat", "Rave", "Reapeat"]);
  const [title, setTitle] = useState("");
  const [isGreen, setIsGreen] = useState(false);

  function toggleBackground() {
    alert("You Changed the color");
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
    alert("You added something");
    if (title.trim() !== "") {
      setTask([title, ...tasks]);
      setTitle("");
    }
  }

  function deleteTask(index) {
    alert("You removed something");
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTask(updatedTasks);
  }
  function doCount() {
    prompt("You added a count");
    setCount((count) => count + 1);
  }

  return (
    <div
      style={greenContainer}
      className="flex flex-col items-center justify-center gap-4 min-h-screen p-8"
    >
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-2xl font-bold text-gray-800">Att göra lista</h1>
        <input
          className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
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
      <div className="flex flex-col gap-2">
        {tasks.map((task, index) => (
          <div
            className="flex justify-between items-center border border-gray-200 rounded-lg p-2"
            key={index}
          >
            <div>{task}</div>
            <button
              className="bg-lime-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
              onClick={() => deleteTask(index)}
            >
              delete
            </button>
          </div>
        ))}
      </div>
      <button
        className="bg-gray-800 text-white font-semibold py-2 px-4 rounded transform hover:scale-105 hover:bg-gray-700 hover:shadow-lg transition duration-300 ease-in-out"
        onClick={doCount}
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
