import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';


function BugTableCell ({eachBug}) {
    return (
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">{eachBug.title}</TableCell>
            <TableCell align="right">{eachBug.description}</TableCell>
            <TableCell align="right">{eachBug.assignee}</TableCell>
            <TableCell align="right">{eachBug.date}</TableCell>
            
        </TableRow>

    )
}

export default BugTableCell;