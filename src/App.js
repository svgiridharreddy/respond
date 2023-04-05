import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// import Navbar from './components/common/navbar';

// import Sidebar from './components/common/sidebar';
import SearchScreen from "./components/pages/searchScreen";
import CustomerGroup from "./components/pages/customerGroup";
import CustomerGroupFormNew from "./components/forms/customerGroupFormNew";
import Status from "./components/pages/status";
import Customer from "./components/pages/customer";
import CustomerForm from "./components/forms/customerForm";
import Product from "./components/pages/product";
import Activity from "./components/pages/activity";
import CustomerContact from "./components/pages/custotmerContact";
import RemCustomerGroup from "./components/pages/remCustomerGroup";
import Payment from "./components/pages/payment";
import Ics from "./components/pages/ics";
import ProactiveMailing from "./components/pages/proactiveMailing";
import RemProduct from "./components/pages/remProduct";
import Qaqc from "./components/pages/qaqc";
import Uor from "./components/pages/uor";
import LoginForm from "./components/forms/loginForm";
import NavbarPills from "./components/common/navbarPills";
import NotFound from "./components/common/notFound";
// import CustomerFormNew from "./components/forms/customerFormNew";

function App() {
  return(
  
    <React.Fragment>
      <NavbarPills />
      <Routes>
          <Route path="/customer-group" element={<CustomerGroupFormNew></CustomerGroupFormNew>} />
          <Route path="/status" element={<Status></Status>} />
          <Route path="/customer/:id" element={<CustomerForm/>}></Route>
          <Route path="/product" element={<Product></Product>} />
          <Route path="/activity" element={<Activity></Activity>} />
          <Route path="/customer-contact" element={<CustomerContact></CustomerContact>} />
          <Route path="/rem-customer-group" element={<RemCustomerGroup></RemCustomerGroup>} />
          <Route path="/payment" element={<Payment></Payment>} />
          <Route path="/ics" element={<Ics></Ics>} />
          <Route path="/proactive-mailing" element={<ProactiveMailing></ProactiveMailing>}></Route>
          <Route path="/rem-product" element={<RemProduct></RemProduct>}></Route>
          <Route path="/qc-qa" element={<Qaqc></Qaqc>}></Route>
          <Route path="/uor" element={<Uor></Uor>}></Route>
          <Route path="/search-screen" element={<SearchScreen></SearchScreen>} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" exact element={<Navigate replace to="/search-screen" />} />
          <Route path="/not-found" element={<NotFound />}/>
          <Route path='*' element={<Navigate replace to="not-found" />} />
        </Routes>
      
    </React.Fragment>
    
  );
}

export default App;
