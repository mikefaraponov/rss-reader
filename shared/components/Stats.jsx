import {ColumnsMobile, Column} from './ColumnsMobile'

const Stats = ({stats}) => (
    <ColumnsMobile>
          <Column/>
          <Column className="v-magic ">
            <figure className="image is-64x64">
              <img height='64px' width='64px' src={stats.imageUrl}/>
            </figure>
          </Column>
          <Column className="v-magic">
            <p className="heading capitilize">Messages</p>
            <p className="title is-4">{stats.messagesCount}</p>
          </Column>
          <Column className="v-magic">
              <p className="heading capitilize">Authors</p>
              <p className="title is-4">{stats.authorsCount}</p>
          </Column>
          <Column/>
      </ColumnsMobile>
)

export default Stats
