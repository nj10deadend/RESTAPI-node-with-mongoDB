import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import {useState, useEffect} from 'react';



function BugTableCell ({eachBug, getFetchAllBugs}) {

    const [patchModalOpen, setPatchModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [assignee, setAssignee] = useState("");

    const openPatchModal = () => setPatchModalOpen(true);
    const closePatchModal = () => setPatchModalOpen(false);

    const openDeleteModal = () => setDeleteModalOpen(true);
    const closeDeleteModal = () => setDeleteModalOpen(false);


    return (
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">{eachBug.title}</TableCell>
            <TableCell align="right">{eachBug._id}</TableCell>
            <TableCell align="right">{eachBug.description}</TableCell>
            <TableCell align="right">{eachBug.assignee}</TableCell>
            <TableCell align="right">{eachBug.date}</TableCell>
            <Button onClick={openPatchModal} variant="outlined">Edit</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={patchModalOpen}
                onClose={closePatchModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <form>
                    <Box>
                        <label for="id">Enter ID of Bug to Edit</label>
                        <br></br>
                        <br></br>
                        <TextField required id="id-input" label="Enter ID of Bug to Edit"
                        variant="outlined" 
                        onChange={(event) => {setId(event.target.value)}} 
                        value = {id}
                        />
                    </Box>

                </form>


            </Modal>
            <Button onClick={openDeleteModal} variant="outlined" color="error">Delete</Button>


        </TableRow>

    )
}

export default BugTableCell;