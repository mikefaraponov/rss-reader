import { Pie, Doughnut } from "react-chartjs"
import {getLettersFrequency} from "../redux/utils/getLettersFrequency"
import {removeTags, searchAnImage} from "../redux/utils/stringParsers"

const MediaAvatar = ({url}) => 
  <figure className="media-left">
    <p className="image is-64x64">
      <img height="64px"  width="64px" src={url || '/not_found.png'}/>
    </p>
  </figure>

const LetterFreqPie = ({data}) =>
  data?
    <p className='is-text-centered stats-container'>
      <Pie className='stats' data={getLettersFrequency(data)}/>
    </p>
    :
    <p/>

const Media = ({className, ...props}) =>
  <article className={`media ${className}`} {...props}/>


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
