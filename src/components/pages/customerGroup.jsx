import React, { Component } from 'react';
import NavbarPills from '../common/navbarPills';
import CustomerGroupForm from '../forms/customerGroupForm';
class CustomerGroup extends Component {
  state = {  } 
  render() { 
    return (
     <React.Fragment>
        <NavbarPills />
        <CustomerGroupForm />
      </React.Fragment>
    );
  }
}
 
export default CustomerGroup;