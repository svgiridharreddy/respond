import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return ( 
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">Respond</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/customer-group">Customer Group</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/status">Status<span className="sr-only">(current)</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/customer/:id">Customer</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/product">Product</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/activity">Activity</NavLink>
        </li>

         <li className="nav-item">
          <NavLink className="nav-link" to="/customer-contact">Customer Contact</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/rem-customer-group">Rem Customer Group</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/payment">Payment</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/ics">ICS<span className="sr-only">(current)</span></NavLink>
        </li>

         <li className="nav-item">
          <NavLink className="nav-link" to="/proactive-mailing">Proactive Mailing</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/rem-product">Rem Product</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/qc-qa">QC/QA</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/uor">UoR</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
      </ul>
    </div>
    </nav>
   );
}
 
export default Navbar;