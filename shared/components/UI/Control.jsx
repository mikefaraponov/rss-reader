const Control = ({className, ...props}) => 
  <p className={`control ${className || ""}`} {...props}/>

export default Control;
