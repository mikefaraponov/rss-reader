
const Control = ({style, children, className}) => (
  <p className={`control ${className || ""}`} style={style}>
      { children }
  </p>
)

export default Control;
