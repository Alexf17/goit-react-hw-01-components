import {TableHead, TableWrap, TableRow, TableBody, TableRowData, TableHeadLine} from './Transaction.styled'

export const TransactionHistory = ({items}) => {
return (
    <TableWrap>
  <TableHead>
    <TableRow>
      <TableHeadLine>Type</TableHeadLine>
      <TableHeadLine>Amount</TableHeadLine>
      <TableHeadLine>Currency</TableHeadLine>
    </TableRow>
  </TableHead>

    <TableBody>
    {items.map(item => 
    <TableRow key={item.id}>
      <TableRowData>{item.type}</TableRowData>
      <TableRowData>{item.amount}</TableRowData>
      <TableRowData>{item.currency}</TableRowData>
    </TableRow>
        )}
    
  </TableBody>
</TableWrap>
)

}


