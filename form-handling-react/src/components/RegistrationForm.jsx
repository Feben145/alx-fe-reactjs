import React, { useState } from 'react';

const RegistrationForm = () => {
  // Define state with individual values for username, email, and password
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  // Handle changes in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.username && formData.email && formData.password) {
      console.log('Form submitted:', formData);
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
          value={formData.username} // Ensure "value" is set to formData.username
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email} // Ensure "value" is set to formData.email
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password} // Ensure "value" is set to formData.password
          onChange={handleChange}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
