import React, { useState } from 'react';
import TaskForm from './TaskForm';

const App1 = () => {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);                

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <button onClick={() => setShowForm(!showForm)}>New Task</button>
      {showForm && <TaskForm addTask={addTask} />}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.assignedTo} - {task.status} - {task.dueDate} - {task.priority} - {task.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App1;
