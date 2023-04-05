import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './sidebarData';
import './sidebar.css';
class Sidebar extends Component {
  state = {  } 
  render() { 
    return (
            <>
              <div className="navbar">
                
              </div>
              <nav className="nav-menu">
                <ul className="nav-menu-items">
                  {SidebarData.map((item) => 
                    <li className={item.cName} key={item.title}>
                      <Link to={item.path}>
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  )}
                </ul>
              </nav>
            </>
          );
  }
}
 
export default Sidebar;