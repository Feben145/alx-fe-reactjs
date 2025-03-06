import React, { useState } from 'react';

const RegistrationForm = () => {
  // Use individual state variables for username, email, and password
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle change for username
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  // Handle change for email
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle change for password
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && email && password) {
      console.log('Form submitted:', { username, email, password });
    } else {
      alert('All fields are required');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username} // Directly pass the username state here
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email} // Directly pass the email state here
          onChange={handleEmailChange}
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password} // Directly pass the password state here
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
