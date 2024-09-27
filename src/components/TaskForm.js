// import React, { useState } from 'react';

// const TaskForm = ({ addTask }) => {
//   const [task, setTask] = useState({
//     assignedTo: '',
//     status: 'Not Started',
//     dueDate: '',
//     priority: 'Normal',
//     description: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setTask({ ...task, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addTask(task);
//     setTask({
//       assignedTo: '',
//       status: 'Not Started',
//       dueDate: '',
//       priority: 'Normal',
//       description: ''
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Assigned to:
//         <input type="text" name="assignedTo" value={task.assignedTo} onChange={handleChange} />
//       </label>
//       <label>
//         Status:
//         <select name="status" value={task.status} onChange={handleChange}>
//           <option value="Not Started">Not Started</option>
//           <option value="In Progress">In Progress</option>
//           <option value="Completed">Completed</option>
//         </select>
//       </label>
//       <label>
//         Due Date:
//         <input type="date" name="dueDate" value={task.dueDate} onChange={handleChange} />
//       </label>
//       <label>
//         Priority:
//         <select name="priority" value={task.priority} onChange={handleChange}>
//           <option value="Low">Low</option>
//           <option value="Normal">Normal</option>
//           <option value="High">High</option>
//         </select>
//       </label>
//       <label>
//         Description:
//         <textarea name="description" value={task.description} onChange={handleChange}></textarea>
//       </label>
//       <button type="submit">Save</button>
//     </form>
//   );
// };

// export default TaskForm;
