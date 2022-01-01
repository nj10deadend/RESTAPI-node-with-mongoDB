import {useState} from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function BugSearch ({setBugServer}) {

    const [searchId, setSearchId] = useState("");
    const [clicked, setClicked] = useState(false);

    const searchBugText = clicked ? "Hide Search Form" : "Click to Search for a Bug"

    function getFetchOneBug () {
        axios.get(`http://localhost:8080/bugs/${searchId}`)
          .then(res => {
              console.log(res.data);
            setBugServer(res.data)
        })
    
    }
    
    function onSearch(event) {
        event.preventDefault()
        setSearchId("");
        // getFetchAllBugs();
        getFetchOneBug();
        setClicked(false);
    }

    return (
        <div>
            <Button className="bttns" variant="contained" onClick={() => {setClicked(!clicked)}}>{searchBugText}</Button>
            {clicked && (
                <div>
                    <form onSubmit={onSearch}>
                        <br></br>
                        <TextField id="outlined-basic" label="Search for bug by Entering its ID" 
                        variant="outlined" 
                        onChange={(event) => {setSearchId(event.target.value)}} 
                        value = {searchId}
                        />
                        <br></br>
                        <Button variant="outlined" type="submit">Search</Button>
                    </form>

                </div>
            )}
        </div>
    )
}

export default BugSearch;