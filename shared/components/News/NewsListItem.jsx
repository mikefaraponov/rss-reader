import {removeTags, searchAnImage} from "../../redux/utils/stringParsers"
import MediaAvatar from '../UI/MediaAvatar'
import Media from '../UI/Media'
import LetterFreqPie from './LetterFreqPie'

const NewsListItem = ({feed, onOpen}) => {
  const {description, image, author, pubDate, isOpen} = feed;
  if(description) {
    var imageUrl = searchAnImage(description)
    var clearDescription = removeTags(description)
  }
  return (
    <Media onDoubleClick={onOpen}>
      <MediaAvatar url={image.url || imageUrl}/>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{author || feed['rss:title']['#']}</strong> <small>{
              pubDate?`posted at ${new Date(pubDate).toLocaleString()}`:'Pub date is unknown.'
            }</small>
            <br/>
            {clearDescription}
          </p>
          <LetterFreqPie data={isOpen && clearDescription}/>
        </div>
      </div>
    </Media>
  )
}



export default NewsListItem
