
import ReactS from "react";
import './index.css';
import './Modal.css';
import Header from './Header';
import { useState } from 'react';


const Modal = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null;

	
	// const [open, setOpen] = React.useState(false);

	// const handleClose = () => {
	//   setOpen(false);
	// };
  
	// const handleOpen = () => {
	//   setOpen(true);
	// };  

	return (
		<div>
			<div
			onClick={onClose}
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				background: "rgba(0, 0, 0, 0.5)",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			    //  backgroundColor:"red",
                zIndex:10
			}}
		>
			<div
				 style={{
				 	background: "white",
				 	height: "85%",
				 	width: "85%",
				 	margin: "auto",
				 	padding: "2%",
				 	border: "2px solid #000",
				 	borderRadius: "10px",
				 	boxShadow: "2px solid black",
                     zIndex:10,
				 }}
			> 
			   <h1>EDIT TASK </h1> <hr></hr>
      <label className='user-2'>Assigned to: </label>
         <br></br>
        <select name="assignedTo" className='select-1' >
          
          <option value="User 1">User 1</option>
          
          <option value="User 2">User 2</option>
          
        </select> 
     
      { <div className='section-2'>
     <label className='status'>
        Status: </label> <br></br>
        <select className="status-2" name="status">
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
     </div> } 

        
      
      
        <div className='date'>
      <label className='due-date'>Due Date:</label>
       <br></br>
      
        <input className="input-23" type="date" name="dueDate"  classname="duedate"/>
        </div>

     <div className='priority'>
     <label className='input-12'>
        Priority: </label> <br></br>
        <select className='input-45' name="priority">
          <option value="Low">Low</option>
          <option value="Normal">Normal</option>
          <option value="High">High</option>
        </select>
     </div>  

		{ <div className="desc">
		<label className='labe-2'>
        Description:
        </label> <br></br>
        <textarea className="text" name="description"/>
		</div>
	 }
		
		{ <div className='savebutton'>
        { <button  type="button" className='button-1'>Cancel</button> }
        <button  type="button">save</button>
        </div> }
	 
				{/* { {children} } */}
			</div>
		</div>
		</div>
	);

	// return (
	// 	<div className="modalnew">
	// 		<form>
	// 			<button onClick={onClose}>
	// 				new button
	// 			</button>
	// 		</form>

	// 	</div>
	// )
};

export default Modal;
