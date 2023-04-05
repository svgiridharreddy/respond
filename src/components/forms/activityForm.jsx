import React, { Component } from 'react';
import Form from '../common/form';

class ActivityForm extends Form {
  state = { data: {},errors: {} } 
  render() { 
    return (
        <nav>
            <label htmlFor="" className="button"> 
              Drop Select
              <span className="fas fa-caret-down"></span>
            </label>
              
              <ul className="menuu"> 
                  <li><a href="#">Home</a></li>
                  <li>
                    <label htmlFor="" className="first">Features</label>
                    <ul>
                      <li><a href="#">Feature 1</a></li>
                      <li> <a href="#">Feature 2</a></li>
                    </ul>
                  </li>
                  <li>
                    <label htmlFor="" className="second">Courses</label>
                    <ul>
                      <li><a href="#">Course 1</a></li>
                      <li><a href="#">Course 2</a></li>
                      <li><a href="#">Course 3</a></li>
                    </ul>
                  </li>
              </ul>
          </nav>
    );
  }
}
 
export default ActivityForm;

// <ul>
//                       <li><a href="#">Feature 1</a></li>
//                       <li><a href="#">Feature 2</a></li>
//                       <li><a href="#">Feature 3</a></li>
//                     </ul>

 <ul>
                      <li><a href="#">Course 1</a></li>
                      <li><a href="#">Course 2</a></li>
                      <li><a href="#">Course 3</a></li>
                    </ul>