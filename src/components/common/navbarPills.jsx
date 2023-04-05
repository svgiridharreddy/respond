import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { NavbarData } from './navbarData';
class NavbarPills extends Component {
  state = { selectedLink: "" } 

  handleSelectLink = (item) => {
    this.setState({selectedLink: item.title})
  }
  render() { 
    return (
      <section className="menu">
        <ul>
        {NavbarData.map(item => 
          <li className="nav-item" key={item.title} onClick={() => this.handleSelectLink(item)}>
            <Link className={ item.title === this.state.selectedLink ?  "nav-link active" : "nav-link"} to={item.path}>{item.title}</Link>
          </li>
        )}
      </ul>
      </section>
    );
  }
}
 

export default NavbarPills;