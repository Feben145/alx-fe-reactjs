import React, { useState } from 'react';

const RegistrationForm = () => {
  // State variables for username, email, password, and errors
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
  });

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

  // Basic form validation
  const validateForm = () => {
    let valid = true;
    let errorMessages = {
      username: '',
      email: '',
      password: '',
    };

    // Validate username
    if (!username) {
      errorMessages.username = 'Username is required';
      valid = false;
    }

    // Validate email
    if (!email) {
      errorMessages.email = 'Email is required';
      valid = false;
    }

    // Validate password
    if (!password) {
      errorMessages.password = 'Password is required';
      valid = false;
    }

    // Set errors if any
    setErrors(errorMessages);

    return valid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Run validation before submission
    if (validateForm()) {
      console.log('Form submitted:', { username, email, password });
    } else {
      console.log('Form has errors:', errors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>} {/* Display error message */}
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>} {/* Display error message */}
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>} {/* Display error message */}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;