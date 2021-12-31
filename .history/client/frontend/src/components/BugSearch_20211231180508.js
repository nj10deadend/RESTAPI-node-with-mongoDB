import {useState} from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function BugSearch ({getFetchAllBugs, setBugServer}) {

    const [searchId, setSearchId] = useState("");
    const [clicked, setClicked] = useState(false);

    const searchBugText = clicked ? "Hide Search Form" : "Click to Search for a Bug"

    function getFetchOneGame () {
        axios.get(`http://localhost:8080/allGames/${searchId}`)
          .then(res => {
            setGameData([res.data])
        })
    
    }
    
    function onSearch(event) {
        event.preventDefault()
        setSearchId("");
        getFetchOneGame();
    }

    return (
        <div>
            <Button className="bttns" variant="contained" onClick={() => {setClicked(!clicked)}}>{searchGameText}</Button>
            {clicked && (
                <form onSubmit={onSearch}>
                    <br></br>
                    <TextField id="outlined-basic" label="Search for game by Entering its ID" 
                    variant="outlined" 
                    onChange={(event) => {setSearchId(event.target.value)}} 
                    value = {searchId}
                    />
                    <br></br>
                    <Button variant="outlined" type="submit">Search</Button>
                </form>
            )}
        </div>
    )
}

export default BugSearch;