import React from 'react';
import './index.css';
import Modal from "./Modal";
import { useState } from 'react';


const TaskManagement = ({ saveTask }) => {
  // const tasks = [
  //   {
  //     id: 1,
  //     assignedTo: 'User 1',
  //     status: 'Completed',
  //     dueDate: '2024-10-12',
  //     priority: 'Low',
  //     comments: 'This task is good',
  //   },
  //   {
  //     id: 2,
  //     assignedTo: 'User 2',
  //     status: 'In Progress',
  //     dueDate: '2024-09-14',
  //     priority: 'High',
  //     comments: 'This task needs attention',
  //   },
  // ];

  const [task, setTask] = useState({
    assignedTo: 'User 1',
    status: 'Not Started',
    dueDate: '2016-05-12',
    priority: 'Normal',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveTask(task);
    // console.log('Task saved:', task);
  };

 

  return (
    // <div>
    //   <h1>Task Management</h1>
    //   <table>
    //     <thead>
    //       <tr>
    //         <th>Assigned To</th>
    //         <th>Status</th>
    //         <th>Due Date</th>
    //         <th>Priority</th>
    //         <th>Comments</th>
    //         <th>Actions</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {tasks.map((task) => (
    //         <tr key={task.id}>
    //           <td>{task.assignedTo}</td>
    //           <td>{task.status}</td>
    //           <td>{task.dueDate}</td>
    //           <td>{task.priority}</td>
    //           <td>{task.comments}</td>
    //           <td>
    //             <button>Actions</button>
    //           </td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>

    <form onSubmit={handleSubmit} className='form'>

      <h1>NEW TASK </h1> <hr></hr>
      <label className='user-2'>Assigned to: </label>
         <br></br>
        <select name="assignedTo" className='select-1' value={task.assignedTo} onChange={handleChange}>
          
          <option value="User 1">User 1</option>
          
          <option value="User 2">User 2</option>
          
        </select>
      
     <div className='section-2'>
     <label className='status'>
        Status: </label> <br></br>
        <select className="status-2" name="status" value={task.status} onChange={handleChange}>
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
     </div>

        
      
      
      <div className='date'>
      <label className='due-date'>Due Date:</label>
       <br></br>
      
        <input className="input-23" type="date" name="dueDate" value={task.dueDate} onChange={handleChange} classname="duedate"/>
        </div>

     <div className='priority'>
     <label className='input-12'>
        Priority: </label> <br></br>
        <select className='input-45' name="priority" value={task.priority} onChange={handleChange}>
          <option value="Low">Low</option>
          <option value="Normal">Normal</option>
          <option value="High">High</option>
        </select>
    
     </div>
      
      <div className="desc">
      <label className='labe-2'>
        Description:
        </label> <br></br>
        <textarea className="text" name="description" value={task.description} onChange={handleChange} />
      
      </div><hr></hr>
      {/* <button type="button">Cancel</button>
      <button type="submit">Save</button> */}
    </form>


  );
};

const Header = () => {

  const [open, setOpen] = React.useState(false);
  const [task,setTask] = React.useState({
    assignedTo: 'User 1',
    status: 'Not Started',
    dueDate: '2016-05-12',
    priority: 'Normal',
    description: ''
  });

  const saveTask = (task) => {
    console.log('Task saved:', task);
    // Add your task saving logic here
  };


  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };  

  

 
  return (
    <header className="class">
      {/* bg-light mb-4 p-3 */}
      <div class="cont">
        <h1 className="display-4">Task</h1>
      </div>

      <div class="container">
       <div className='newbutton'>
       <button onClick={handleOpen}>New Task</button>
       <button>Refresh</button>
        </div>
        <button className='search'>Search</button>
      </div>

      <Modal isOpen={open} >
        <TaskManagement saveTask={saveTask}/>
        <div className='savebutton'>
        <button onClick={handleClose} type="button" className='button-1'>Cancel</button>
        <button type="submit" form="task-form">save</button>
        </div>
      </Modal>

    </header>
  );
};

export default Header;