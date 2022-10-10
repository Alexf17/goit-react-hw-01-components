 import {FriendLi,FriendImg,FriendName,FriendStatus} from '../FriendList/FriendList.styled'



export const FriendItem = ({ avatar, isOnline, name }) => {
   return (
            <FriendLi >
                <FriendStatus status={isOnline} ></FriendStatus>
                <FriendImg src={avatar} alt={name} width="48" />
                <FriendName>{name}</FriendName>
            </FriendLi>
   )
        
    
   }