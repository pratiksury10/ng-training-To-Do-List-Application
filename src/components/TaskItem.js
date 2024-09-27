import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import './index.css';
import Header from './Header';

const TaskItem = ({ task, onEdit, onDelete }) => {
    return (
      <>
       {/* <Header/> */}
          <tr>
            <td>{task.assignedTo}</td>
            <td>{task.status}</td>
            <td>{task.dueDate}</td>
            <td>{task.priority}</td>
            <td>
                {task.comments}
                <DropdownButton id="dropdown-basic-button" title="Actions" className="ms-2"  >
                    <Dropdown.Item onClick={() => onEdit(task.id)}>Edit</Dropdown.Item>
                    <Dropdown.Item onClick={() => onDelete(task.id)}>Delete</Dropdown.Item>
                </DropdownButton>
            </td>
        </tr>
        </>
    
    );
};

export default TaskItem;
