import {useState} from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Signup () {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [adminEmail, setAdminEmail] = useState(false);

    return (
        <div>
            <h1>Create a new account</h1>

            <form>
                <div>
                    <label for="name">Name</label>
                    <br></br>
                    <br></br>
                    <TextField id="outlined-basic1" label="Enter name" 
                    variant="outlined" 
                    onChange={(event) => {setName(event.target.value)}} 
                    value = {name}
                    />

                </div>

            </form>

        </div>
    )
}

export default Signup;