import React, {Component} from 'react';
import Joi  from 'joi-browser';
import Input from './input';
import Select from './select';
import Textarea from './textarea';
import DropdownSelect from './dropdownSelect';

class Form extends Component {
  state = {
    data: {},
    errors: {}
  } 

  validateProperty = ({name,value}) => {
    const obj = {[name]: value}
    const schema = {[name]: this.schema[name]}
    if(!this.schema[name]) return null;
    const {error} = Joi.validate(obj, schema)
    return error ? error.details[0].message : null 
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // const errors = this.validate();
    // this.setState({errors: errors || {}})
    // if(errors) return ;
    this.doSubmit();
  }

  validate = () => {
    const options = {abortEarly: false}
    const {error}  = Joi.validate(this.state.joiValidationFields, this.schema, options)
    if (!error) return null;
    const errors = {}
    error.details.reduce((acc,item) => { return errors[item.path[0]] = item.message},{});
    return errors;
  }

  handleChange = ({currentTarget: input}) => {
    const errors = {...this.state.errors}
    const errorMessage = this.validateProperty(input);
    if(errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name]
    const data = {...this.state.data}
    const joiValidationFields = {...this.state.joiValidationFields}
    data[input.name] = input.type === "checkbox" ? input.checked : input.value;
    if((input.name in joiValidationFields))
      joiValidationFields[input.name] = input.type === "checkbox" ? input.checked : input.value;
    this.setState({data,errors,joiValidationFields})
  }

  handleDropdownSelect = (label, obj) => {
    let data = {...this.state.data}
    data[label] = {...obj};
    this.setState({data})
  }

  renderInput = (name, label, type="text") => {
    const {data, errors} = this.state;
    return <Input 
    type={type} 
    name={name} 
    label={label} 
    value={data[name]} 
    error={errors[name]}  
    onChange={this.handleChange} />
  }

  renderSelect = (name, label, options) => {
    const {data, errors} = this.state;
    return (
      <Select 
      name={name} 
      label={label} 
      value={data[name]} 
      error={errors[name]} 
      options={options} 
      onChange={this.handleChange} />
    )
  }

  renderTextarea = (name,label) => {
    const {data,errors} =  this.state;
    return(
      <Textarea name={name} label={label} value={data[name]} error={errors[name]} onChange={this.handleChange}></Textarea>
    )
  }

  renderDropdown = (label,name,options) => {
    return(
      <DropdownSelect label={label} name={name} dropdownOptions={options} handleDropdownSelect={this.handleDropdownSelect} />
    )
  }

  renderButton = (label,cName="") => {
    return (
          <button className={`btn btn-primary ${cName}`} >{label}</button>
      )
  }
}
export default Form;