import React, { Component } from 'react';
// import { Typeahead } from 'react-bootstrap-typeahead';
// import Navbar from './common/navbar';
import NavbarPills from '../common/navbarPills';
import CustomerForm from '../forms/customerForm';

class Customer extends Component {
  state = {
    singleSelections: []
  }
  options = ["1","2","3","4"]
  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({singleSelections: e.target.value})
  }
  render() { 
    return (
      <React.Fragment>
        <NavbarPills />
        <CustomerForm />
      </React.Fragment>
    );
  }
}
 
export default Customer;



