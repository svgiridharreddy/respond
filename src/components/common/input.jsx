import React from 'react';

const Input = ({name,label,error,type, ...rest}) => {
  return ( 
    <>
      {
        type === "text" || type === "date"  ? 
          <div className="form-group">
            <label htmlFor={name} id={name}>{label}</label>
            <input name={name} id={name} type={type} className="form-control" {...rest} />
            {error && <div className="alert alert-danger">{error}</div>}
          </div> 
        : 
        type === "radio" ?
        <div className="form-group">
          <input type={type} id={name} name={name} {...rest} />
          <label htmlFor={name} id={name} className="form-check-label">Bank</label>
          <input className="form-check-input" type={type} id={name} name={name} {...rest} />
          <label htmlFor={name} id={name} className="form-check-label">Non Bank</label>
          {error && <div className="alert alert-danger">{error}</div>}
        </div> 
        : 
        <div className="form-group">
          <input type={type} id={name} name={name} {...rest} />
          <label htmlFor={name} id={name} className="form-check-label">{label}</label>
          {error && <div className="alert alert-danger">{error}</div>}
        </div> 
          
      }
    </>
  )}
 
export default Input;





