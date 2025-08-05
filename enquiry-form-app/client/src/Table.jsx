import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

// ✅ Custom Styled Components
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.grey[900],
    color: theme.palette.common.white,
    fontWeight: "bold",
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

// ✅ Row data
function createData(email, name, phone, msg) {
  return { email, name, phone, msg };
}

const rows = [
  createData("ashu@gmail.com", "Ashutosh Ranjan", "9800004321", "msg1"),
  createData("john@example.com", "John Doe", "9123456789", "msg2"),
  createData("jane@example.com", "Jane Smith", "9876543210", "msg3"),
];



export default function CustomizedTables({ data = [] }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Email</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Phone</StyledTableCell>
            <StyledTableCell align="right">Message</StyledTableCell>
            <StyledTableCell align="right">Edit</StyledTableCell>
            <StyledTableCell align="right">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {row.email}
              </StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.phone}</StyledTableCell>
              <StyledTableCell align="right">{row.msg}</StyledTableCell>
              <StyledTableCell align="right">
                <Button variant="outlined" size="small" color="primary">
                  Edit
                </Button>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Button variant="outlined" size="small" color="error">
                  Delete
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


// export default function CustomizedTables({data}) {
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 700 }} aria-label="customized table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>Email</StyledTableCell>
//             <StyledTableCell align="right">Name</StyledTableCell>
//             <StyledTableCell align="right">Phone</StyledTableCell>
//             <StyledTableCell align="right">Message</StyledTableCell>
//             <StyledTableCell align="right">Edit</StyledTableCell>
//             <StyledTableCell align="right">Delete</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row, index) => (
//             <StyledTableRow key={index}>
//               <StyledTableCell component="th" scope="row">
//                 {row.email}
//               </StyledTableCell>
//               <StyledTableCell align="right">{row.name}</StyledTableCell>
//               <StyledTableCell align="right">{row.phone}</StyledTableCell>
//               <StyledTableCell align="right">{row.msg}</StyledTableCell>
//               <StyledTableCell align="right">
//                 <Button variant="outlined" size="small" color="primary">
//                   Edit
//                 </Button>
//               </StyledTableCell>
//               <StyledTableCell align="right">
//                 <Button variant="outlined" size="small" color="error">
//                   Delete
//                 </Button>
//               </StyledTableCell>
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
