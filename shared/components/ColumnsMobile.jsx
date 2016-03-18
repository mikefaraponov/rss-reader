export const ColumnsMobile = ({className, ...props}) => 
  <div className={`columns is-mobile ${className || ''}`} {...props}/>

export const Column = ({className, ...props}) => 
  <div className={`column ${className || ''}`} {...props}/>

