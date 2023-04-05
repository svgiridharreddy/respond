import React, { Component } from 'react'
import Joi from 'joi-browser';
import { connect } from 'react-redux';
import NavbarPills from '../common/navbarPills';
import withRouter from '../hoc/withRouter';
import Form from '../common/form';
import {getCustomer } from '../services/customerService';
import {loadCustomerGroup,addCustomer} from '../../store/customerGroup';
import {loadCustomer} from '../../store/customer'

class CustomerForm extends Form {
  joiValidationFields = {
    customer: "",
    title: "",
    firstName: "",
    surname: "",
    cinBin: "",
    recieptDate: "",
    dob: "",
    deceasedDate: "",
    addUpdtOnbyCust: "",
    contactType: "",
  }
  schema = {
    customer: Joi.string().required().label("Customer"),
    title: Joi.string().required().label("Title"),
    firstName: Joi.string().required().label("Firstname"),
    surname: Joi.string().required().label("Surname"),
    cinBin: Joi.string().required().label("CI/BIN"),
    recieptDate: Joi.string().required().label("Reciept"),
    dob: Joi.string().required().label("DOB"),
    deceasedDate: Joi.string().required().label("Deceased Date"),
    addUpdtOnbyCust: Joi.string().required().label("Addr Updated by Customer"),
    contactType: Joi.string().required().label("Contact Type"),
  }
  state = { 
    data: {
      ...this.joiValidationFields,
      companyName: "",
      addressLine1: "",
      addressLine2: "",
      addressLine3: "",
      addressLine4: "",
      addressLine5: "",
      postCode: "",
      homePhone: "",
      mobilePhone: "",
      workPhone: "",
      officePhone: "",
      createdBy: "",
      lastModifiedBy: "",
      insolvency: "",
      overseas: "",
      includeInComms: "",
      customerSituation: "",
      bankNonbank: ""
    },
    joiValidationFields: this.joiValidationFields,
    errors: {
    }
   } 
   
  options = [
      {label: "group1",value: "group 1"},
      {label: "group2",value: "group 2"},
      {label: "group3",value: "group 3"}
    ]
  
  doSubmit = () => {
    console.log("submitted!")
    // window.location = "/activity"
  }

  populateCustomer(){
    const data = {...this.state.data}
    const customerId = this.props.params.id
    if(customerId === "new") return ;
    debugger;
    const customerData = this.props.loadCustomer(parseInt(customerId));
  
    const {customer,title,firstName,surname,cinBin,recieptDate,dob,deceasedDate,addUpdtOnbyCust,contactType} = {...customerData}
    const joiValidationFields = {customer,title,firstName,surname,cinBin,recieptDate,dob,deceasedDate,addUpdtOnbyCust,contactType}
    this.setState({data: customerData ,joiValidationFields})
  }

  componentDidMount(){
    this.populateCustomer()
  }
  
  render() { 
    return (
      <React.Fragment>
       
        <section className="form">
          <form className="customer-form" onSubmit={this.handleSubmit}>
            <fieldset className="info basic-info">
              <legend>Personal Details</legend>
                {this.renderSelect("customer", "Customer",this.options)}
                {this.renderInput("title","Titile")}
                {this.renderInput("firstName","First Name")}
                {this.renderInput("surname","Surname")}
                {this.renderInput("cinBin","CI/BIN")}
                {this.renderInput("dob","DOB","date")}
                {this.renderInput("companyName","CompanyName")}
            </fieldset>
            <fieldset className="info contact-info">
              <legend>Contact Details</legend>
                {this.renderInput("addressLine1","Address Line 1")}
                {this.renderInput("addressLine2","Address Line 2")}
                {this.renderInput("addressLine3","Address Line 3")}
                {this.renderInput("addressLine4","Address Line 4")}
                {this.renderInput("addressLine5","Address Line 5")}
                {this.renderInput("postCode","Post Code")}
                {this.renderInput("homePhone","Home Phone")}
                {this.renderInput("mobilePhone","Mobile Phone")}
                {this.renderInput("workPhone","Work Phone")}
                {this.renderInput("officePhone","Office Phone")}
            </fieldset>
            <fieldset className="info modified-info">
              <legend>Modified Details:</legend>
                {this.renderInput("createdBy","Created By")}
                {this.renderInput("lastModifiedBy","Last Modified By")}
                {this.renderInput("recieptDate","Receipt Date","date")}
                {this.renderInput("deceasedDate","Deceased Date","date")}
                {this.renderInput("addUpdtOnbyCust","Address updated on","date")}
            </fieldset>
            <fieldset className="info other-info">
              <legend>other details</legend>
              {this.renderInput("contactType","Contact Type")}
              {this.renderInput("insolvency","Insolvency")}
              {this.renderInput("overseas","Overseas")}
              {this.renderInput("includeInComms","Include In Comms")}
              {this.renderInput("customerSituation","Customer Situation")}
              {this.renderInput("bankNonbank","Bank/Non Bank","radio")}
            </fieldset>
          </form>
        </section>

      

      </React.Fragment>
    );
  }
}

// <div className="text-center">
//               {this.renderButton("Save","btn-save")}
//             </div>
// const mapStateToProps = (state) => ({
//    bugs: (state) //state.entities.bugs.list
//  })

 const matchStateToProps = (state) =>({
    
})

 const mapDispatchToProps = (dispatch) => ({
  loadCustomer: (customerId) => dispatch(loadCustomer(customerId)),
  addCustomer: (customer) => dispatch(addCustomer(customer)),
 })

export default connect(null,mapDispatchToProps)(withRouter(CustomerForm));

        //     <form onSubmit={this.handleSubmit} className="form customer">
        //   <div className="container">
        //     <div className="row">
        //       <div className="col-md-6 customer personal-details">
                
        //         <fieldset className="personal-details-set">
        //           <legend>Personal Details</legend>
                    // {this.renderSelect("customer", "Customer",this.options)}
                    // {this.renderInput("title","Titile")}
                    // {this.renderInput("firstName","First Name")}
                    // {this.renderInput("surname","Surname")}
                    // {this.renderInput("cinBin","CI/BIN")}
                    // {this.renderInput("dob","DOB","date")}
                    // {this.renderInput("companyName","CompanyName")}
        //         </fieldset>
                
        //       </div>
        //         <div className="col-md-6 customer contact-details">
        //           <fieldset className="contact-details-set">
        //             <legend>Contact Details</legend>
                      // {this.renderInput("addressLine1","Address Line 1")}
                      // {this.renderInput("addressLine2","Address Line 2")}
                      // {this.renderInput("addressLine3","Address Line 3")}
                      // {this.renderInput("addressLine4","Address Line 4")}
                      // {this.renderInput("addressLine5","Address Line 5")}
                      // {this.renderInput("postCode","Post Code")}
                      // {this.renderInput("homePhone","Home Phone")}
                      // {this.renderInput("mobilePhone","Mobile Phone")}
                      // {this.renderInput("workPhone","Work Phone")}
                      // {this.renderInput("officePhone","Office Phone")}
        //           </fieldset>
        //         </div>
        //     </div>
        //     <div className="row">
        //       <div className="col-md-6 customer modified-details">
        //         <fieldset className="other-details-set">
        //         <legend>Modified Details:</legend>
                  // {this.renderInput("createdBy","Created By")}
                  // {this.renderInput("lastModifiedBy","Last Modified By")}
                  // {this.renderInput("recieptDate","Receipt Date","date")}
                  // {this.renderInput("deceasedDate","Deceased Date","date")}
                  // {this.renderInput("addUpdtOnbyCust","Address updated on","date")}
        //         </fieldset>
        //       </div>
        //       <div className="col-md-6 customer other-details">
                // <fieldset className="other-details-set">
                //   <legend>other details</legend>
                //   {this.renderInput("contactType","Contact Type")}
                //   {this.renderInput("insolvency","Insolvency")}
                //   {this.renderInput("overseas","Overseas")}
                //   {this.renderInput("includeInComms","Include In Comms")}
                //   {this.renderInput("customerSituation","Customer Situation")}
                //   {this.renderInput("bankNonbank","Bank/Non Bank","radio")}
                // </fieldset>
        //       </div>
        //     </div>

        //     <div className="text-center button-save">
        //       <button className={`btn btn-primary`} disabled={this.validate()} onClick={()=> this.props.addCustomer(this.state.data)}>Save</button>
        //     </div>
        //   </div>
        // </form>