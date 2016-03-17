import { Pie } from "react-chartjs"
import {getLettersFrequency} from "../redux/utils/getLettersFrequency"
import {removeTags, searchAnImage} from "../redux/utils/stringParsers"

const NewsListItem = ({item, onOpen}) => {
  const {description, image, author, pubDate, isOpen} = item;
  if(description){
    var imageUrl = searchAnImage(description)
    var clearDesc = removeTags(description)
  }
  return (
    <article className="media" onDoubleClick={onOpen}>
      <figure className="media-left">
        <p className="image is-64x64">
          <img height="64px"  width="64px" src={
            image.url || imageUrl || '/not_found.png'
          }/>
        </p>
      </figure>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{author || item['rss:title']['#']}</strong> <small>{
              pubDate?'posted at ' + new Date(pubDate).toLocaleString():''
            }</small>
            <br/>
            {clearDesc}
          </p>
          {
            isOpen && clearDesc?
            <p className='is-text-centered stats-container'>
              <Pie className='stats' data={getLettersFrequency(clearDesc)}/>
            </p>
            :
            null
          }
        </div>
      </div>
      
    </article>
)}



export default NewsListItem
