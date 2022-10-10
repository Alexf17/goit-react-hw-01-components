import PropTypes from 'prop-types';
import { FriendWrap } from '../FriendList/FriendList.styled'
import {FriendItem} from './FriendItem'

export const FriendList = ({friends}) => {
    return (
        <FriendWrap>
            {friends.map(friend => (
        <FriendItem key={friend.id} avatar={friend.avatar}
          isOnline={friend.isOnline} name={friend.name}
        />
      ))}
        </FriendWrap>
    )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ),
};

