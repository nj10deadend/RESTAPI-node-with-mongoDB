import {useState} from 'react';
import { useNavigate } from 'react-router';
import Button from '@mui/material/Button';
// import SendIcon from '@mui/icons-material/Send';
import SendIcon from '@material-ui/icons/Send';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import axios from 'axios';

function Signup () {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [admin, setAdmin] = useState(false);

    const navigate = useNavigate();

    async function postRequest() {
        return await axios.post('http://localhost:8080/users', {
            name: name, 
            password: password, 
            email: email, 
            admin: admin
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
    async function onSubmit(event) {
        event.preventDefault();
        setName("");
        setPassword("");
        setEmail("");
        await postRequest();
        navigate('/bug-table')
    }

    return (
        <Box className="signup">
            <Typography variant="h3" component="h2" gutterBottom>Create a new User</Typography>
            <form onSubmit={onSubmit}>
                <Box>
                    <label for="name">Name</label>
                    <br></br>
                    <br></br>
                    <TextField required id="outlined-basic1" label="Enter name" 
                    variant="outlined" 
                    onChange={(event) => {setName(event.target.value)}} 
                    value = {name}
                    />

                </Box>
                <Box>
                    <label for="email">Email</label>
                    <br></br>
                    <br></br>
                    <TextField required id="outlined-basic2" label="Enter email" 
                    variant="outlined" 
                    onChange={(event) => {setEmail(event.target.value)}} 
                    value = {email}
                    />

                </Box>
                <Box>
                    <label for="password">Password</label>
                    <br></br>
                    <br></br>
                    <TextField required id="outlined-password-input" label="password" type="password"
                    variant="outlined" 
                    onChange={(event) => {setPassword(event.target.value)}} 
                    value = {password}
                    />
                </Box>

                <Box>
                    <label for="admin">Admin</label>
                    <br></br>
                    <br></br>
                    <TextField id="outlined-read-only-input" label="Admin"
                    defaultValue= {false}
                    InputProps={{
                      readOnly: true,
                    }}
                    value = {admin}
                    />
                </Box>
                <br></br>
                <Button variant="contained" endIcon={<SendIcon />} type="submit">Create account</Button>
            </form>

        </Box>
    )
}

export default Signup;