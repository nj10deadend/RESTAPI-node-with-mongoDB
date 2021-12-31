import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';


function BugTableCell ({eachBug}) {
    return (
        <div>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >

            </TableRow>

        </div>
    )
}

export default BugTableCell;