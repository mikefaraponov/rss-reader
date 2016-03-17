import ChannelListItem from './ChannelListItem'
const styleActions = {textAlign: 'center'}


const ChannelList = ({channels, onItemDelete, onItemOpen}) => (
    <table className="table is-striped">
      <thead>
        <tr>
          <th>Title</th>
          <th>Updated</th>
          <th className='is-hidden-mobile'>Link</th>
          <th colSpan="2" style={styleActions}>Actions</th>
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
