import styled from "styled-components"


export const TableHead = styled.thead`
text-transform: uppercase;
color: white;
background-color: rgb(102, 178, 255);
`

export const TableBody = styled.tbody`
display: table-row-group;
vertical-align: middle;
border-color: inherit;
`
export const TableHeadLine = styled.th`
padding: 10px;
border: 2px solid grey;
`
export const TableRowData = styled.td`
width: 300px;
padding: 10px;
border: 2px solid grey;

`
export const TableWrap = styled.table`
border: 2px solid grey;
text-align: center;
box-shadow: 0px 0px 21px -3px rgba(0,0,0,0.34);
cursor: pointer;
`

export const TableRow = styled.tr`
display: table-row;
vertical-align: inherit;
border-color: inherit;
&:nth-child(2n) {
    background-color: rgb(224, 224, 224);
}
`