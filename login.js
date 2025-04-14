// src/RegistrationForm.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const LoginForm = () => {
  // Define the state for the form fields using useState hook
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate(); // Initialize the navigate hook

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;  // Get the name and value from the event target
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`User Logged In!\nEmail: ${email}`);  // Display the email in the alert
    navigate('/home'); // Navigate to the home page
  };

  return (
    <div className='c1'>
      <br /><br />
      <h2>Login Form</h2>
      <br />
      <div className="login">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="button" onClick={() => navigate('/home')}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
