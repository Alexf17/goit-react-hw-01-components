import styled from "styled-components";

export const FriendList = styled.ul`
display: flex;
flex-direction: column;
margin-bottom: 50px;
`;

export const FriendItem = styled.li`
width: 200px;
padding: 10px;
border: 2px solid grey;
display: flex;
align-items: center;
box-shadow: 0px 0px 21px -3px rgba(0,0,0,0.34);
&:not(:last-child) {
    margin-bottom: 5px;
}
`;
export const FriendImg = styled.img`
margin-right: 25px;
border-radius: 50%;
border: 1px solid grey;
`;
export const FriendName = styled.p`
font-weight: 500;
font-size: 20px;
`;
export const FriendStatus = styled.span`
width: 20px;
height: 20px;
border-radius: 50%;
border: 1px solid black;
display: block;
margin-right: 20px;
background-color: ${props => {
    if (props.status) {
        return "green"
    } else {
        return "red"
    }
}   
};
`;