import styled from "styled-components";

export const Wrap = styled.div`
display: flex;
justify-content: center;
margin-bottom: 50px;
width: 270px;
flex-wrap: wrap;
border: 3px solid grey;
margin-top:50px;
margin-bottom:50px;
cursor: pointer;
box-shadow: 0px 0px 21px -3px rgba(0,0,0,0.34);
`

export const Description = styled.div`
padding: 20px;
display: flex;
align-items: center;
flex-direction: column;
`

export const Image = styled.img`
border-radius: 50%;
border: 3px solid grey;
width: 110px;
margin-bottom: 30px;
`

export const Name = styled.p`
font-weight: 700;
margin-bottom: 15px;
`

export const Info = styled.p`
color: gray;
margin-bottom: 15px;
`
export const StatsList = styled.ul`
box-sizing: border-box;
display: flex;
width: 100%;
border-top: 1px solid grey;
background-color: lightgrey;
`
export const StatsItem = styled.li`
padding: 15px 0px;
width: calc(33.3333%);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-right: 1px solid grey;

`
export const Label = styled.span`
margin-bottom: 10px;
color: grey;
`
export const Quantity = styled.span`
color: black;
font-weight: 500;
`
