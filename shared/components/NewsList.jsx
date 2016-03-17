import {Column, ColumnsMobile} from './ColumnsMobile'
import NewsListItem from './NewsListItem'

const NewsList = ({onOpen, news, isLoading}) => (
    <ColumnsMobile>
          <Column className="is-6-desktop is-offset-3-desktop">
            {
              news.map(
                (item, i) =>
                  <NewsListItem key={i} item={item} onOpen={onOpen(i)}/> 
              )
            }
          </Column>
        </ColumnsMobile>
)


export default NewsList
