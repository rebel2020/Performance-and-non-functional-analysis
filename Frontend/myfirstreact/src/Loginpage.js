import React, { Component } from 'react';
//import ReactDOM from 'react-dom'
//import { Redirect } from 'react-router-dom';
import './App.css';

class Loginpage extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: ''
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: '' });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.username) {
      return this.setState({ error: 'Username is required' });
    }

    if (!this.state.password) {
      return this.setState({ error: 'Password is required' });
    }

    return this.setState({ error: '' });
  }

  

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value,
    });
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }

  
  render() {
    
    return (
      <div id="t01" className="Login">
      <center>
      <h2><u>LoginPage</u> :</h2>
        <form onSubmit={this.handleSubmit}>
          {
            this.state.error &&
            <h3 data-test="error" onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
              {this.state.error}
            </h3>
          }
          <label>Enter username</label>
          <br/>
          <input type="text"  placeholder="username" data-test="username" value={this.state.username} onChange={this.handleUserChange} />
          <br/>
          
          <label>Enter password</label>
          <br/>
          <input type="password" placeholder="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />
          <br/>
      
          <button>Login</button>
        </form>
        </center>
      </div>
    );
  }
}

export default Loginpage;