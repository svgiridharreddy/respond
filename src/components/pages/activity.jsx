import React, { Component } from 'react'
import NavbarPills from '../common/navbarPills';
import ActivityForm from '../forms/activityForm';
class Activity extends Component {
  state = {  } 
  render() { 
    return (
      <div>
        <NavbarPills />
        <ActivityForm/>
      </div>
    );
  }
}
 
export default Activity;