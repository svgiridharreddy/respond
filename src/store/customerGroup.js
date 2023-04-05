import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./apiTest";
import { getCustomerGroupData } from '../components/services/customerGroupService';

const initialState = getCustomerGroupData()
console.log(initialState);

const customerGroupSlice = createSlice({
  name: "customerGroup",
  initialState: initialState,
  reducers: {
    customerGroupReceived: (customerGroup,action) => {
      console.log(customerGroup);
    },
    customerAdded: (customerGroup,action) => {
      customerGroup.customers.push(action.payload)
      console.log("customerGroup in redux",customerGroup);
    }
  }
})

const {customerGroupReceived,customerAdded} = customerGroupSlice.actions;
export default customerGroupSlice.reducer;

 debugger;
export const addCustomer = customer => apiCallBegan(
  {
    data: customer,
    onStart: customerAdded.type
  } 
 
)

export const loadCustomerGroup = () => (dispatch,getState)=> {
  return getState().entities.customerGroup
}