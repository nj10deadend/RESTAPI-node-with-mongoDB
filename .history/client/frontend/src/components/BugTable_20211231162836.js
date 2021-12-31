import Button from '@mui/material/Button';
import SendIcon from '@material-ui/icons/Send';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import {useState, useEffect} from 'react';
import BugTableCell from './BugTableCell';


function BugTable ({userFormData}) {

    const [user, setUser] = useState({});
    console.log(user);
    const [bugServer, setBugServer] = useState([]);
    const [clicked, setClicked] = useState(false);



    // function getFetchCurrentUser () {
    //     axios.get(`http://localhost:8080/users/${userFormData.name}`)
    //         .then(res => {
    //         console.log(res.data);
    //         setUser(res.data)
    //     })
    // }
    // getFetchCurrentUser();
    
    function getFetchAllBugs () {
        axios.get(`http://localhost:8080/bugs`)
        .then(res => {
            console.log(res.data);
            setBugServer(res.data)
        })
    }


    useEffect(getFetchAllBugs, []);


    const renderTableCells = bugServer.map(eachBug => {
        return (
            <BugTableCell key={eachBug._id} eachBug={eachBug} />
        )

    })

    const newBugBttnTxt = clicked ? "Hide Submission Form" : "Click to add a new bug"



    return (
        <div>
            {/* <p>Logged in as {user.name}</p> */}

            <Typography variant="h3" component="div" gutterBottom>Bug Tracker</Typography>

            <Button onClick={()=> setClicked(!clicked)} variant="contained">{newBugBttnTxt}</Button>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell align="right">ID</TableCell>
                            <TableCell align="right">Description</TableCell>
                            <TableCell align="right">Assignee</TableCell>
                            <TableCell align="right">Date/Time</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {renderTableCells}

                    </TableBody>
                </Table>

            </TableContainer>


        </div>
    )
}

export default BugTable;