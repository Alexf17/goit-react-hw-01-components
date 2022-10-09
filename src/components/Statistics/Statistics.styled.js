import styled from "styled-components";

const xxx = function randColor() {
  let r = Math.floor(0 * 256);
  let g = Math.floor(0 * 256);
  let b = Math.floor(Math.random(0.5) * 256);
  return '#' + r.toString(16) + g.toString(16) + b.toString(16);
};
const yyy = function randColor() {
  let r = Math.floor(1 * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return '#' + r.toString(16) + g.toString(16) + b.toString(16);
};

export const Section = styled.section`
display: flex;
flex-direction: column;
margin-bottom: 50px;
width: 400px;
align-items: center;
border: 3px solid grey;
padding-top: 15px;
margin: 0 auto;
margin-bottom: 30px;

`;
export const List = styled.ul`
box-sizing: border-box;
display: flex;
width: 100%;
border-top: 1px inset grey;
`;

export const Item = styled.li`
padding: 10px 0px;
width: calc(25%);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: ${xxx};
border: 1px solid grey;
`;

export const StatisticTitle = styled.h2`
font-weight: 600;
text-transform: uppercase;
margin-bottom: 15px;
`;

export const Label = styled.span`
color: ${yyy};
font-weight: 500;
font-size: 18px;
`;

export const Percentage = styled.span`
color: ${yyy};
font-weight: 500;
font-size: 20px;
`;