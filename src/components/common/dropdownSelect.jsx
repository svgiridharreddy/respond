import React, { Component } from 'react';


class DropdownSelect extends Component {
  constructor(props){
    super(props)
    this.state = { 
    optionClicked: true,
    selectedValue: this.props.dropdownOptions.selectedValue || "Select option",
  }
  this.checkboxRef = React.createRef();
  this.dropdownRef = React.createRef();
}
  
  handleClick = () => {
    this.setState({optionClicked: !this.state.optionClicked})
  }

  handleChange = (e) => {
    debugger;
    let suboption = e.target.getAttribute('data-suboption')
    let option = e.target.parentElement.getAttribute("data-option")
    this.checkboxRef.current.checked = false
    const selectedValue = option ? `${option}(${suboption})` : `${suboption}`
    const {label, dropdownOptions} = this.props;
    let menuOptions = {...dropdownOptions};
    menuOptions["selectedValue"] = selectedValue;
    this.props.handleDropdownSelect(label,menuOptions)
    this.setState({selectedValue})
  }


  render() { 
    const { label, name, dropdownOptions} = this.props;
    const {selectedValue} = this.state;
    const {options} = dropdownOptions;
    return (
      <div className={`form-group`} ref={this.dropdownRef}>
        <label htmlFor="dropdown">{name}</label>
         <nav className="dropdown form-control">
          <label htmlFor="btn" className="button">
            { selectedValue }
            <span className="fa fa-caret-down"></span>
          </label>
          <input type="checkbox" id="btn" className="checkbox" ref={this.checkboxRef} />
          {options && <ul className="menu-items" >
            {options.map((option,index) => 
              option["subOptions"].length > 0 ? 
              <li className="item" key={`${option.optionName}${index}`}>
                <label htmlFor={`btn-${index}`} className="first">
                {`${option.optionName}`}
                <span className="fa fa-caret-down"></span>
                </label>
                <input type="checkbox" id={`btn-${index}`} className="checkbox" />
                <ul data-option={`${option.optionName}`} className="sub-menu-items">
                  {option["subOptions"].map((suboption,i) => 
                    <li className="sub-menu-item" key={`${suboption}_${i}`} data-suboption={`${suboption}`} onClick={this.handleChange}>{`${suboption}`}</li>
                  )}
                </ul>
              </li>
              :
              <li className="item" data-suboption={option.optionName} onClick={this.handleChange}>{option.optionName}</li>
            )}
          </ul>}
        </nav>
      </div>
    );
  }
}
 
export default DropdownSelect;