import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';



import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'font-awesome/css/font-awesome.css';
// import 'react-bootstrap-typeahead/css/Typeahead.css';


import configureStore from './store/configureStore';

import App from './App';

const store = configureStore()


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    
  </React.StrictMode>
);

