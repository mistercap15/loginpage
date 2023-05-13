import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_URL = 'https://api-axir.onrender.com/api';

function User() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${API_URL}/users`);
        console.log(response.data); // check the response data
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Registered Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </li>
        ))}
      </ul>
      <button onClick={() => navigate('/')}>Home</button>
    </div>
  );
}

export default User;
