// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getUsers = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://reqres.in/api/users?page=1');
      const data = await response.json();
      setUsers(data.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="brand">Your Brand Name</div>
        <button className="get-users-btn" onClick={getUsers}>Get Users</button>
      </nav>
      <div className="user-grid">
        {isLoading && <div className="loader">Loading...</div>}
        {users.map(user => (
          <div key={user.id} className="user-card">
            <img src={user.avatar} alt={user.first_name} />
            <div>{user.first_name} {user.last_name}</div>
            <div>Email: {user.email}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
