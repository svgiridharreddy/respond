import axios from "axios";
import * as actions from "../apiTest";


const apiTest = ({dispatch,getState}) => next => action => {
  next(action);
  // const {onStart,data,onSuccess} = action.paylod
  // next(action);
  // dispatch({type: onSuccess, payload: data})
  // if(onStart) dispatch({type: onStart})
  // if(onSuccess) dispatch({type: onSuccess, payload: data})
}

export default apiTest;