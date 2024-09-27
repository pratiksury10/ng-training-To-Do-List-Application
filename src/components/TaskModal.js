import React, { useState } from 'react';
import './index.css';


const TaskModal = ({ handleClose, show, handleSave, users }) => {
  const [task, setTask] = useState({
    assignedTo: '',
    status: '',
    dueDate: '',
    priority: '',
    comments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const onSave = () => {
    handleSave(task);
    handleClose();
  };

  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <h2>New Task</h2>
        <form className='taskmodal'>
          <div>
            <label>Assigned To</label>             
            <select name="assignedTo" value={task.assignedTo} onChange={handleChange}>
              <option value="">Select User</option>
              {users.map((user, index) => (
                <option key={index} value={user}>{user}</option>
              ))}
            </select>
          </div>
          <div>
            <label>Status</label>
            <select name="status" value={task.status} onChange={handleChange}>
              <option value="">Select Status</option>
              <option value="Not Started">Not Started</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div>
            <label>Due Date</label>
            <input type="date" name="dueDate" value={task.dueDate} onChange={handleChange} />
          </div>
          <div>
            <label>Priority</label>
            <select name="priority" value={task.priority} onChange={handleChange}>
              <option value="">Select Priority</option>
              <option value="Low">Low</option>
              <option value="Normal">Normal</option>
              <option value="High">High</option>
            </select>
          </div>
          <div>
            <label>Description</label>
            <textarea name="comments" value={task.comments} onChange={handleChange}></textarea>
          </div>
          <button type="button" onClick={handleClose}>Cancel</button>
          <button type="button" onClick={onSave}>Save</button>
        </form>
      </section>
    </div>
  );
};

export default TaskModal;
