import React from 'react';
import TaskItem from './TaskItem';
import './index.css';

const TaskList = ({ tasks, onEdit, onDelete }) => {
    return (
        <table className="table table-striped">                    
            <thead>
                <tr>
                    <th>Assigned To</th>            
                    <th>Status</th>
                    <th>Due Date</th>
                    <th>Priority</th>
                    <th>Comments</th>
                </tr>
            </thead>
            <tbody className='taskitem'>
                {tasks.map(task => (
                    <TaskItem key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
                ))}
            </tbody>
        </table>
    );
};

export default TaskList;
