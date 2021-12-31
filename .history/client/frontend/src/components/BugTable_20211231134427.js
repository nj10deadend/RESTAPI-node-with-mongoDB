import Button from '@mui/material/Button';
import SendIcon from '@material-ui/icons/Send';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import axios from 'axios';
import {useState, useEffect} from 'react';


function BugTable ({userFormData}) {

    const [user, setUser] = useState({});
    const [bugServer, setBugServer] = useState([]);

    function getFetchCurrentUser () {
        axios.get(`http://localhost:8080/users/${userFormData.name}`)
          .then(res => {
            setUser(res.data)
        })
    }

    function getFetchAllBugs () {
        axios.get(`http://localhost:8080/bugs`)
        .then(res => {
            setBugServer(res.data)
        })
    }

    useEffect(getFetchAllBugs, []);



    return (
        <div>


        </div>
    )
}

export default BugTable;