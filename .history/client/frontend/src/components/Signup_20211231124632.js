import {useState} from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Signup () {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [adminEmail, setAdminEmail] = useState(false);

    return (
        <Box>
            <Typography variant="h2" component="h2" gutterBottom>Create a new User</Typography>
            <form>
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
                    <TextField required id="outlined-basic2" label="password" type="password"
                    variant="outlined" 
                    onChange={(event) => {setPassword(event.target.value)}} 
                    value = {password}
                    />
                </Box>

            </form>

        </Box>
    )
}

export default Signup;