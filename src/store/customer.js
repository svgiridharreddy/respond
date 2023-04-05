import { createSlice } from "@reduxjs/toolkit";
import { getCustomer } from "../components/services/customerService";
import { apiCallBegan } from './apiTest';

const initialState = getCustomer(1)
const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    customerRequested: (customer,action) => {

    },
    customerReceived: (customer,action) => {
      console.log(customer);
    },
    customerAdded: (customer,action) => {

    }
  }
})


const {customerReceived,customerAdded,customerRequested} = customerSlice.actions;
export default customerSlice.reducer;

export const loadCustomer = (customerId) => (dispatch,getState) => {
  debugger;
  return getState().entities.customerGroup.customer.find(customer => customer.id === customerId)
}

export const addCustomer = (customer) => apiCallBegan({
  data: customer,
  onStart: customerRequested.type,
  onSuccess: customerAdded.type
})