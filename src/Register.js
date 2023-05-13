import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_URL = 'http://localhost:5000/api';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/register`, { name, email, password });
      localStorage.setItem('token', response.headers.authorization);
      alert('Successfully registered!');
      // redirect to the profile page or home page
    } catch (error) {
      console.error(error);
      alert('Registration failed!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Register</h1>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">Register</button>
      <button onClick={() => navigate('/')}>Home</button>
    </form>
  );
}

export { Register };
