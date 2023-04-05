import React, { Component } from 'react';
import NavbarPills from '../common/navbarPills';

class SearchScreen extends Component {
  state = {hideNavbar: false } 
  render() { 
    return (
      <>
        {this.state.hideNavbar ? <NavbarPills></NavbarPills> : null}
       <h1>Search Screen Page</h1>
      </>
      
    );
  }
}
 
export default SearchScreen;