import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Joi  from 'joi-browser';
import { connect } from 'react-redux';
import Form from "../common/form";
import CustomerTable from './customerTable';
import ProductTable from './productTable';
import {loadCustomerGroup,addCustomer} from '../../store/customerGroup';
import { getCustomerGroupData } from '../services/customerGroupService';



class CustomerGroupFormNew extends Form {
  joiValidationFields = {
    customerGroup: "",
    phase3RefNo: "",
    cohortName: "",
    indigoRevNo: "",
    custTreatmentStart: "",
    dtrReason: {
        selectedValue: "Feature1",
        options: [
                  {optionName: "Features",subOptions: ["Feature 1","Feature 2"]},
                  {optionName: "Courses",subOptions: ["Course 1","Course 2"]}
                ]
    } ,
    dtrOverallOutcome: "",
    ccOverallOutcome: "",
    productDocStatus: "",
    salesChannel: "",
    loggedBy: "",
    modifiedBy: "",
    doneBy: "",
    ownedBy: "",
  }
  state = {
    data: {
      ...this.joiValidationFields,
      aitNotes: "",
      reference: "",
      recieptDate: "",
      age: "",
      customer: [{id: 1,fullName: "giridhar",contactType: "bank"},{id: 2,fullName: "reddy",contactType: "bank"}],
      product: [{id: 1, name: "product1",policyNumber: "13344"},{id: 2,name: "product2",policyNumber: "43413"}]
    },
    showCustomer: true,
    errors: {
    }
  } 

  populateStateValues(){
    const data = this.props.loadCustomerGroup()
    let joiValidationFields = this.joiValidationFields;
    joiValidationFields = {...data}
    this.setState({data,joiValidationFields})
  }

  componentDidMount(){
    this.populateStateValues()
    console.log("state updated",this.state.data);
  }

  schema = {
    customerGroup: Joi.string().required().label("Cutomer Group"),
    phase3RefNo: Joi.string().required().label("Phase 3 Ref.No"),
    cohortName: Joi.string().required().label("Cohort Name"),
    indigoRevNo: Joi.string().label("Indigo Rev No"),
    custTreatmentStart: Joi.string().required().label("Customer Treatment Start"),
    dtrReason: Joi.string().required().label("DTR Reason"),
    dtrOverallOutcome: Joi.string().required().label("DTR Overall Outcome"),
    ccOverallOutcome: Joi.string().required().label("CC Overall Outcome"),
    productDocStatus: Joi.string().optional().label("Product Doc Status"),
    salesChannel: Joi.string().required().label("Sales Channel"),
    loggedBy: Joi.string().optional().label("Logged By"),
    modifiedBy: Joi.string().optional().label("Modified By"),
    doneBy: Joi.string().optional().label("Done by"),
    ownedBy: Joi.string().optional().label("Owned by"),
  }


   customerTreatmentOptions=[
    {label: "group1",value: "group 1"},
    {label: "group2",value: "group 2"},
    {label: "group3",value: "group 3"}
  ]


  dtrReasonOptions=[
    {label: "group1",value: "group 1"},
    {label: "group2",value: "group 2"},
    {label: "group3",value: "group 3"}
  ]

  dtrOverallOutcomeOptions=[
    {label: "group1",value: "group 1"},
    {label: "group2",value: "group 2"},
    {label: "group3",value: "group 3"}
  ]

  ccOverallOutcomeOptions=[
    {label: "group1",value: "group 1"},
    {label: "group2",value: "group 2"},
    {label: "group3",value: "group 3"}
  ]

  productDocStatusOptions=[
    {label: "group1",value: "group 1"},
    {label: "group2",value: "group 2"},
    {label: "group3",value: "group 3"}
  ]

  doSubmit =  () => {
    console.log("when submitting",this.state.data);
    debugger;
    // window.location = "/customer-group"
    // this.props.history.push("/customer-group")
  }
  
  render() { 
    const {dtrReason,customer, product} = this.state.data
    return (
        <React.Fragment>
          <form className="customer-group">
            <div className="row"> 
              <div className="column">
                {this.renderInput("customerGroup","Customer Group")}
                {this.renderInput("phase3RefNo","Phase 3 Ref.No")}
                {this.renderInput("cohortName","CohortName")}
                {this.renderInput("indigoRevNo","Indigo Rev No")}
                {this.renderSelect("custTreatmentStart", "Customer Treatment Start",this.customerTreatmentOptions)}
                {this.renderDropdown("dtrReason", "DTR Reson",dtrReason)}
                {this.renderSelect("dtrOverallOutcome", "DTR Overall Outcome",this.dtrOverallOutcomeOptions)}
                {this.renderSelect("ccOverallOutcome", "CC Overall Outcome",this.ccOverallOutcomeOptions)}
                {this.renderSelect("productDocStatus", "Product Doc status",this.productDocStatusOptions)}
                {this.renderSelect("salesChannel", "Sales Channel",this.productDocStatusOptions)}
                {this.renderTextarea("aitNotes","AIT Notes")}
                {this.renderInput("reference","Ref")}
              </div>  
              <div className="column">
                {this.renderSelect("ccOverallOutcome", "CC Overall Outcome",this.ccOverallOutcomeOptions)}
                {this.renderSelect("productDocStatus", "Product Doc status",this.productDocStatusOptions)}
                {this.renderSelect("salesChannel", "Sales Channel",this.productDocStatusOptions)}
                {this.renderTextarea("aitNotes","AIT Notes")}
                {this.renderInput("reference","Ref")}
                <div className="customer-product">
                  <ul> 
                    <li><Link>Customer</Link></li>
                     <li><Link>Product</Link></li>
                  </ul>
                  {this.state.showCustomer ? <CustomerTable data={customer} /> : <ProductTable data={product} />}
                </div>
              </div>
            </div>
            <button className={`btn btn-primary`}>Save</button>
          </form>
      </React.Fragment>
    )   
  }
}

const matchStateToProps = (state) =>({
  loadCustomerGroup: state.entities.customerGroup
})

const mapDispatchToProps = (dispatch) => ({
  loadCustomerGroup: () => dispatch(loadCustomerGroup()),
  addCustomer: (customer) => dispatch(addCustomer(customer)),
 })

export default connect(matchStateToProps,mapDispatchToProps)(CustomerGroupFormNew);

// <button className={`btn btn-primary`} disabled={this.validate()} onClick={()=> this.props.addCustomer(this.state.data)}>Save</button>


          // <section className="form">
          //   <form className="customer-group-form" onSubmit={this.handleSubmit}>
          //     <fieldset className="info basic-info">
          //       <legend>Basic Info</legend>
          //         {this.renderInput("customerGroup","Customer Group")}
          //         {this.renderInput("phase3RefNo","Phase 3 Ref.No")}
          //         {this.renderInput("cohortName","CohortName")}
          //         {this.renderInput("indigoRevNo","Indigo Rev No")}
          //         {this.renderSelect("custTreatmentStart", "Customer Treatment Start",this.customerTreatmentOptions)}
          //         {this.renderDropdown("dtrReason", "DTR Reson",dtrReason)}
          //         {this.renderSelect("dtrOverallOutcome", "DTR Overall Outcome",this.dtrOverallOutcomeOptions)}
          //     </fieldset>
          //     <fieldset className="info contact-info">
          //       <legend>Contact info</legend>
          //       {this.renderSelect("ccOverallOutcome", "CC Overall Outcome",this.ccOverallOutcomeOptions)}
          //       {this.renderSelect("productDocStatus", "Product Doc status",this.productDocStatusOptions)}
          //       {this.renderSelect("salesChannel", "Sales Channel",this.productDocStatusOptions)}
          //       {this.renderTextarea("aitNotes","AIT Notes")}
          //       {this.renderInput("reference","Ref")}
          //     </fieldset>
          //     <fieldset className="info other-info">
          //       <legend>Other info</legend>
          //       {this.renderInput("recieptDate","Reciept Date","date")}
          //       {this.renderInput("age","Age")}
          //       {this.renderInput("loggedBy","Logged By")}
          //       {this.renderInput("modifiedBy","Modified By")}
          //       {this.renderInput("doneBy","Done By")}
          //       {this.renderInput("ownedBy","Owned By")}
          //       <div className="customer-product">
          //         <ul> 
          //           <li><Link>Customer</Link></li>
          //            <li><Link>Product</Link></li>
          //         </ul>
          //         {this.state.showCustomer ? <CustomerTable data={customer} /> : <ProductTable data={product} />}
          //     </div>
               
          //     </fieldset>
              
          //      <button className={`btn btn-primary`}>Save</button>
              
          //   </form>
            
          // </section>