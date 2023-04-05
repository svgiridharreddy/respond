import React from 'react';

const Select = ({name,label,error,options, ...rest}) => {
  return ( 
      <div className="form-group">
          <label htmlFor={name}>{label}</label>
          <select 
            {...rest}
            name={name}
            id={name} 
            className="form-control">
              {options.map(option => (
                <option key={option.label} value={option.label}>{option.value}</option>
              ))}
            </select>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
   );
}
 
export default Select;
