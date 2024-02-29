import React, { Component } from 'react';
import './RegistrationPage.css';

class RegistrationPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        name: '',
        age: '',
        company: '',
      },
      registrationMessage: '',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, age, company } = this.state.formData;
    const message = `Hi ${name}, you are ${age}, working in ${company}.`;

    this.setState({ registrationMessage: message });

  };

  render() {
    const { formData, registrationMessage } = this.state;

    return (
      <div className="container">
        <h1>Registration Page</h1>
         <div className="form-container">
        <form onSubmit={this.handleSubmit} className="form">
          <label className="label">
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
  }
}

export default RegistrationPage;
