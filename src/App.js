import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask, updateTask } from "./redux/tasks/taskSlice";

function App() {
  const taskList = useSelector((state) => Object.values(state.tasks.entities));
  const dispatch = useDispatch();

  const [tasks, setTasks] = useState("");
  const [updateTitle, setUpdateTitle] = useState("");

  const handleSubmit = () => {
    dispatch(addTask({ id: Date.now(), title: tasks }));
  };

  return (
    <div>
      <h1>Enter Tasks</h1>
      <input
        type="text"
        value={tasks}
        onChange={(e) => setTasks(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>

      <div>
        <p>Update Title</p>
        <input
          type="text"
          placeholder="Update Tasks"
          value={updateTitle}
          onChange={(e) => setUpdateTitle(e.target.value)}
        />
      </div>

      <div>
        <h5>Tasks Lists</h5>
        {taskList.map((task) => (
          <div key={task.id}>
            {task.title}
            <button onClick={() => dispatch(deleteTask(task.id))}>
              Delete
            </button>
            <button
              onClick={() =>
                dispatch(
                  updateTask({
                    id: task.id,
                    title: updateTitle,
                  })
                )
              }
            >
              Update Title
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
