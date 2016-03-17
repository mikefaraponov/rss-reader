import Icon from './Icon'

const ChannelListItem = ({channel, onDelete, onOpen}) => (
    <tr>
      <td>{channel.title}</td>
      <td>{new Date(channel.pubDate).toLocaleDateString() || 'Unknown'}</td>
      <td className='is-hidden-mobile'>{channel.link}</td>
      <td className="table-link table-icon">
        <a onClick={onOpen}>
          <Icon fa="newspaper-o"/> Open
        </a>
      </td>
      <td className="table-link table-icon">
        <a onClick={onDelete}>
          <Icon fa="calendar-times-o"/> Delete
        </a>
      </td>
    </tr>
)
export default ChannelListItem
