
const Icon = ({className, fa}) => 
  <i className={`fa fa-${fa}` + (className || '')}/>

export default Icon
