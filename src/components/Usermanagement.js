import React, { useState } from 'react';

const UserManagement = ({ users, addUser }) => {
  const [newUser, setNewUser] = useState('');

  const handleChange = (e) => {
    setNewUser(e.target.value);
  };

  const handleAddUser = () => {
    if (newUser.trim()) {
      addUser(newUser.trim());
      setNewUser('');
    }
  };

  return (
    <div>
      <h2>User Management</h2>
      <input
        type="text"
        value={newUser}
        onChange={handleChange}
        placeholder="Enter new user"
      />
      <button onClick={handleAddUser}>Add User</button>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
