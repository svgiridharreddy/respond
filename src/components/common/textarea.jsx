const Textarea = ({name,label,value,...rest}) => {
  return ( 
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <textarea name={name} className="form-control" rows="5" id={name} value={value} {...rest}></textarea>
      </div>
   );
}
 
export default Textarea;