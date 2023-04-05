import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from '../common/form';

class LoginForm extends Form {
  state = { 
    data: {
      username: "",
      password: ""
    } ,
    errors: {}
  } 

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password")
  }

  doSubmit = () => {
    window.location = "/customer-group"
  }

  render() { 
    return (
      <div className="container-fluid">
        <form className="login" onSubmit={this.handleSubmit}>
          {this.renderInput("username","Username")}
          {this.renderInput("password","Password","password")}
          <div className="text-center">
            {this.renderButton("Login","login-btn")}
          </div>
        </form>
      </div>
    );
  }
}
 
export default LoginForm;