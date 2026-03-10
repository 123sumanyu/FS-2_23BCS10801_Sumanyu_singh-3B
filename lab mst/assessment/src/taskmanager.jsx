import { useState } from "react";
import useForm from "./useform";

function TaskManager() {

  const [tasks, setTasks] = useState([]);

  const { values, handleChange, resetForm } = useForm({
    title: "",
    priority: "Low"
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      title: values.title,
      priority: values.priority
    };

    setTasks([...tasks, newTask]);

    resetForm();
  };

  return (
    <div>
      <h2>Task Tracker</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={values.title}
          onChange={handleChange}
        />

        <select
          name="priority"
          value={values.priority}
          onChange={handleChange}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <button type="submit">Add Task</button>
      </form>

      <h3>Task List</h3>

      <table border="1">
        <thead>
          <tr>
            <th>Task Title</th>
            <th>Priority</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{task.title}</td>
              <td>{task.priority}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default TaskManager;