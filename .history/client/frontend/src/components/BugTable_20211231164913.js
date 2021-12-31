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
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [assignee, setAssignee] = useState("");



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

    async function postRequest () {
        return await axios.post(`http://localhost:8080/bugs`, {
            title: title,
            description: description,
            assignee: assignee
        })
        .then(function (response) {
            console.log(response);
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
            return null;
        });

    }

    function createBug (event) {
        event.preventDefault();
        setTitle("");
        setDescription("");
        setAssignee("");
        setClicked(!clicked);
        await postRequest();
        getFetchAllBugs();
    }


    const renderTableCells = bugServer.map(eachBug => {
        return (
            <BugTableCell key={eachBug._id} eachBug={eachBug} getFetchAllBugs={getFetchAllBugs} />
        )

    })

    const newBugBttnTxt = clicked ? "Hide Submission Form" : "Click to add a new bug"



    return (
        <div>
            {/* <p>Logged in as {user.name}</p> */}

            <Typography variant="h3" component="div" gutterBottom>Bug Tracker</Typography>

            <Button onClick={()=> setClicked(!clicked)} variant="contained">{newBugBttnTxt}</Button>
            {clicked && (
                <form onSubmit={createBug}>
                    <Box>
                        <label for="title">Title</label>
                        <br></br>
                        <br></br>
                        <TextField required id="outlined-basic1" label="Enter general title for bug" 
                        variant="outlined" 
                        onChange={(event) => {setTitle(event.target.value)}} 
                        value = {title}
                        />
                    </Box>
                    <Box>
                        <label for="description">Description</label>
                        <br></br>
                        <br></br>
                        <TextField required id="outlined-basic1" label="Enter description of issue/bug" 
                        variant="outlined" 
                        onChange={(event) => {setDescription(event.target.value)}} 
                        value = {description}
                        />
                    </Box>
                    <Box>
                        <label for="assignee">Assignee</label>
                        <br></br>
                        <br></br>
                        <TextField required id="outlined-basic1" label="Enter name of person assigned this bug (optional)" 
                        variant="outlined" 
                        onChange={(event) => {setAssignee(event.target.value)}} 
                        value = {assignee}
                        />
                    </Box>

                    <Button variant="contained" endIcon={<SendIcon />} type="submit">Submit new bug</Button>
                </form>
            )}

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