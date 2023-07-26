import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

// Custom Styles for Table Header
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const AdminViewOrdersTable = (props) => {
  return (
    <Table
      stickyHeader
      sx={{ minWidth: 700, marginTop: "5%" }}
      aria-label="customized table"
    >
      <TableHead sx={{ borderRadius: "0px" }}>
        <TableRow>
          <StyledTableCell width="10%" align="left">
            Order ID
          </StyledTableCell>
          <StyledTableCell align="right">User ID</StyledTableCell>
          <StyledTableCell align="right">Gift Name</StyledTableCell>
          <StyledTableCell align="right">Price</StyledTableCell>
          <StyledTableCell align="right">Quantity</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.ordersData.map((orderItem) => (
          <StyledTableRow key={orderItem.orderId}>
            <StyledTableCell component="th" scope="row" sx={{ width: "15%" }}>
              {orderItem.orderId}
            </StyledTableCell>
            <StyledTableCell align="right">
              {orderItem.orderEmail}
            </StyledTableCell>
            <StyledTableCell align="right">
              {orderItem.gift.giftName}
            </StyledTableCell>
            <StyledTableCell align="right">
              {orderItem.orderPrice}
            </StyledTableCell>
            <StyledTableCell align="right">
              {orderItem.orderAddress}
            </StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AdminViewOrdersTable;