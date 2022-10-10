 import {FriendItem,FriendImg,FriendName,FriendStatus} from '../FriendList/FriendList.styled'



export const FriendListItem = ({ avatar, isOnline, name }) => {
   return (
            <FriendItem >
                <FriendStatus status={isOnline} ></FriendStatus>
                <FriendImg src={avatar} alt={name} width="48" />
                <FriendName>{name}</FriendName>
            </FriendItem>
   )
        
    
   }