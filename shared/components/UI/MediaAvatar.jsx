const MediaAvatar = ({url}) => 
  <figure className="media-left">
    <p className="image is-64x64">
      <img height="64px"  width="64px" src={url || '/not_found.png'}/>
    </p>
  </figure>

export default MediaAvatar
