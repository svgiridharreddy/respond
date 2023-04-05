import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from './reducer';
import logger from "./middleware/logger";
import func from "./middleware/func";
import toast from './middleware/toast';
import apiTest from "./middleware/apiTest";
 

export default function(){
  return configureStore({reducer, middleware: [...getDefaultMiddleware(),apiTest]}) // shorthand property
  // return configureStore({reducer: reducer}) // can be passed like this but above is the shorthand because both key and value are same
}

