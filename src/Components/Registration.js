import React, { useState } from 'react';
import './RegistrationPage.css';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    company: '',
  });

  const [registrationMessage, setRegistrationMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, age, company } = formData;
    const message = `Hi ${name}, you are ${age}, working in ${company}.`;

    setRegistrationMessage(message);

  };

  return (
    <div className="container">
      <h1>Registration</h1>
      <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <label className="label">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input"
          />
        </label>
        <br />
        <label className="label">
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="input"
          />
        </label>
        <br />
        <label className="label">
          Company:
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="input"
          />
        </label>
        <br />
        <button type="submit" className="button">
          Publish
        </button>
      </form>
      </div>
      {registrationMessage && <p>{registrationMessage}</p>}
    </div>
  );
};


export default Registration;
