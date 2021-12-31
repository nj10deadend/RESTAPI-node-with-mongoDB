import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import ModeEditIcon from '@mui/icons-material/ModeEdit';
// import ModeEditIcon from '@material-ui/icons/ModeEdit';



function BugTableCell ({eachBug}) {
    return (
        <Box>
            <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">{eachBug.title}</TableCell>
                <TableCell align="right">{eachBug.description}</TableCell>
                <TableCell align="right">{eachBug.assignee}</TableCell>
                <TableCell align="right">{eachBug.date}</TableCell>

            </TableRow>
        </Box>

    )
}

export default BugTableCell;