import PropTypes from 'prop-types';
import { TableHead, TableWrap, TableRow, TableBody, TableRowData, TableHeadLine } from './Transaction.styled'

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


TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};