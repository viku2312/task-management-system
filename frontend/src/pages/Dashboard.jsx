import { useEffect, useState } from "react";
import API from "../services/api";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] =
    useState("");

  const loadTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const createTask = async () => {
    try {
      await API.post("/tasks", {
        title,
        description,
      });

      setTitle("");
      setDescription("");

      loadTasks();
    } catch (err) {
      alert("Task Create Failed");
    }
  };

  const deleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);
      loadTasks();
    } catch (err) {
      alert("Delete Failed");
    }
  };

  return (
    <div className="container">
      <h2>Task Dashboard</h2>

      <input
        value={title}
        placeholder="Task Title"
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <textarea
        value={description}
        placeholder="Description"
        onChange={(e) =>
          setDescription(e.target.value)
        }
      />

      <button onClick={createTask}>
        Add Task
      </button>

      {tasks.map((task) => (
        <div
          className="task-card"
          key={task._id}
        >
          <h4>{task.title}</h4>
          <p>{task.description}</p>

          <button
            className="delete-btn"
            onClick={() =>
              deleteTask(task._id)
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;