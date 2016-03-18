
const Icon = ({fa, className, ...props}) => 
  <i className={`fa fa-${fa} ` + (className || '')} {...props}/>

export default Icon
