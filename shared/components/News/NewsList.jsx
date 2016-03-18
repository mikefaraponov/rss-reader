import {
  Column, 
  ColumnsMobile
} from '../UI/Columns'
import NewsListItem from './NewsListItem'

const NewsList = ({onOpen, feeds, isLoading}) => (
    <ColumnsMobile>
      <Column className="is-6-desktop is-offset-3-desktop">
        {
          feeds.map(
            (feed, i) =>
              <NewsListItem key={i} feed={feed} onOpen={onOpen(i)}/> 
          )
        }
      </Column>
    </ColumnsMobile>
)


export default NewsList
