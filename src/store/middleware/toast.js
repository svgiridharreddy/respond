const toast =  store => next => action => {
  
  if(action.type === "error"){
    console.log("Toastify",action.payload.message);
  } 
  else{
    next(action)
  } 
    

  // if(typeof action === "function"){
  //   action(dispatch,getState)
  // }else{
  //   console.log("Toastify:", param);
  //   next(action)
  // }
}

export default toast;