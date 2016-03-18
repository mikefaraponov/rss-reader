import ChannelListItem from './ChannelListItem'


const ChannelList = ({channels, onItemDelete, onItemOpen}) => (
    <table className="table is-striped">
      <thead>
        <tr>
          <th className='center-align'>Title</th>
          <th className='center-align'>Updated</th>
          <th className='is-hidden-mobile center-align'>Link</th>
          <th colSpan="2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {
            channels.map((channel, i) => 
                <ChannelListItem 
                    key={i}
                    channel={channel} 
                    onDelete={onItemDelete(i)}
                    onOpen={onItemOpen(i)}
                />
            )
        }
      </tbody>
    </table>
)


export default ChannelList
