const Warning = ({onClose, message}) => message?
  (
    <div className="notification is-warning">
      <button className="delete" onClick={onClose}/>
      {message}
    </div>
  )
  :
  <div/>

  

export default Warning
