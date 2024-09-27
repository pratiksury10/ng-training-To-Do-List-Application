import React, { useState } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskModal from './components/TaskModal';
import UserManagement from './components/Usermanagement';
// import './index.css';
// import Modal from "./Modal";
// import { useState } from 'react';
import Modal from './components/Modal';
// import './index.css';


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
    console.log('Task saved:', task);
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
      <h1>EDIT TASK</h1>
      <div className='user'> 
      <label>
        Assigned to:
        <select name="assignedTo" value={task.assignedTo} onChange={handleChange}>
          <option value="User 1">User 1</option>
          <option value="User 2">User 2</option>
        </select>
      </label>
      <label>
        Status:
        <select name="status" value={task.status} onChange={handleChange}>
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </label>
      </div>
      
      <div className='date'>
      <label>
        Due Date:
        <input type="date" name="dueDate" value={task.dueDate} onChange={handleChange} />
      </label>
      <label>
        Priority:
        <select name="priority" value={task.priority} onChange={handleChange}>
          <option value="Low">Low</option>
          <option value="Normal">Normal</option>
          <option value="High">High</option>
        </select>
      </label>
      </div>
      <label>
        Description:
        <textarea name="description" value={task.description} onChange={handleChange} />
      </label>
      {/* <button type="button">Cancel</button>
      <button type="submit">Save</button> */}
    </form>


  );
};




const App = () => {
    const [tasks, setTasks] = useState([
        { id: 1, assignedTo: 'User 1', status: 'Completed', dueDate: '2024-10-12', priority: 'Low', comments: 'This task is good' },
        { id: 2, assignedTo: 'User 2', status: 'In Progress', dueDate: '2024-09-14', priority: 'High', comments: 'This task needs attention' },
        { id: 3, assignedTo: 'User 3', status: 'Not Started', dueDate: '2024-08-18', priority: 'Low', comments: 'This task is pending' },
        { id: 4, assignedTo: 'User 4', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is ongoing' },
        { id: 5, title: 'Task 5', assignedTo: 'User 5', status: 'Completed', dueDate: '2024-07-20', priority: 'High', comments: 'This task is done' },
        { id: 6, title: 'Task 6', assignedTo: 'User 6', status: 'Not Started', dueDate: '2024-11-05', priority: 'Low', comments: 'This task is scheduled' },
        { id: 7, title: 'Task 7', assignedTo: 'User 7', status: 'In Progress', dueDate: '2024-12-01', priority: 'Normal', comments: 'This task is in progress' },
        { id: 8, title: 'Task 8', assignedTo: 'User 8', status: 'Completed', dueDate: '2024-09-30', priority: 'High', comments: 'This task is completed' },
        { id: 9, title: 'Task 9', assignedTo: 'User 9', status: 'Not Started', dueDate: '2024-10-15', priority: 'Low', comments: 'This task is pending' },
        { id: 10, title: 'Task 10', assignedTo: 'User 10', status: 'In Progress', dueDate: '2024-11-25', priority: 'High', comments: 'This task is being worked on' },
    ]);

    const handleEdit = (id) => {
        const newComment = prompt('Edit your comment:');
        if (newComment) {
            setTasks(tasks.map(task => 
                task.id === id ? { ...task, comments: newComment } : task
            ));
        }
    };

    const handleDelete = (id) => {
      window.confirm("Delete the item?")
      
        setTasks(tasks.filter(task => task.id !== id));
        
    };







 const [open, setOpen] = React.useState(false);
 const [deleteOpen, setDeleteOpen] = React.useState(false)

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  // function for delete

  // const handleCloseDelete = () => {
  //   setDeleteOpen(false);
  // };

  // const handleOpenDelete = () => {
  //   setDeleteOpen(true);
  // };




    return (
        <div className="container">
            <Header />
            <TaskList tasks={tasks} onEdit={handleOpen} onDelete={handleDelete} />
            <Modal isOpen={open} >
        <TaskManagement />
        <button onClick={handleClose} type="button">Cancel</button>
        <button onClick={handleClose} type="button">save</button>
      </Modal>
      {/* <Modal isOpen={deleteOpen} >
        <TaskManagement1 />
        <button onClick={[handleCloseDelete]} type="button">Yes</button>
        <button onClick={handleCloseDelete} type="button">no</button>
      </Modal> */}
          
        </div>
    );




const [users, setUsers] = useState(['User 1', 'User 2']);
  const [show, setShow] = useState(false);

  const showModal = () => setShow(true);
  const hideModal = () => setShow(false);

  const saveTask = (newTask) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { ...newTask, id: prevTasks.length + 1 },
    ]);
  };

  const addUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  return (
    <div>
      <h1>Task Management</h1>
      <button type="button" onClick={showModal}>
        Add New Task
      </button>
      <TaskModal show={show} handleClose={hideModal} handleSave={saveTask} users={users} />
      <UserManagement users={users} addUser={addUser} />
      <table>
        <thead>
        <tr>
            <th>Assigned To</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Priority</th>
            <th>Comments</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.assignedTo}</td>
              <td>{task.status}</td>
              <td>{task.dueDate}</td>
              <td>{task.priority}</td>
              <td>{task.comments}</td>
              <td>
                <button>Actions</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
  );
};

// const saveTask = (newTask) => {
//   setTasks([...tasks, newTask]);
// };



export default App;
