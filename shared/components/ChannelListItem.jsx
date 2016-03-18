import Icon from './Icon'

const ChannelListItem = ({channel, onDelete, onOpen}) => (
    <tr>
      <td className='center-align'>{channel.title}</td>
      <td className='center-align'>{new Date(channel.pubDate).toLocaleDateString() || 'Unknown'}</td>
      <td className='is-hidden-mobile center-align'>{channel.link}</td>
      <td className="table-link table-icon">
        <a onClick={onOpen}>
          <Icon fa="newspaper-o"/>
        </a>
      </td>
      <td className="table-link table-icon">
        <a onClick={onDelete}>
          <Icon fa="calendar-times-o"/>
        </a>
      </td>
    </tr>
)
export default ChannelListItem
