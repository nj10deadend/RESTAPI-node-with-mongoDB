import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import SendIcon from '@material-ui/icons/Send';
import DeleteIcon from '@mui/icons-material/Delete';

import {useState, useEffect} from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

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
            {/* Edit Button Modal */}
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
                    <Box sx={style}>
                        <Box>
                            <label for="id">Enter the ID of the bug that you want to edit</label>
                            <br></br>
                            <br></br>
                            <TextField required id="id-input" label="Enter ID of Bug to Edit"
                            variant="outlined" 
                            onChange={(event) => {setId(event.target.value)}} 
                            value = {id}
                            />
                        </Box>
                        <Box>
                            <label for="title">Title</label>
                            <br></br>
                            <br></br>
                            <TextField required id="titleInput" label="Enter general title for bug" 
                            variant="outlined" 
                            onChange={(event) => {setTitle(event.target.value)}} 
                            value = {title}
                            />
                        </Box>
                        <Box>
                            <label for="description">Description</label>
                            <br></br>
                            <br></br>
                            <TextField required id="descInput" label="Enter description of issue/bug" 
                            variant="outlined" 
                            onChange={(event) => {setDescription(event.target.value)}} 
                            value = {description}
                            />
                        </Box>
                        <Box>
                            <label for="assignee">Assignee</label>
                            <br></br>
                            <br></br>
                            <TextField required id="assigneeInput" label="Enter name of person assigned this bug (optional)" 
                            variant="outlined" 
                            onChange={(event) => {setAssignee(event.target.value)}} 
                            value = {assignee}
                            />
                        </Box>
                        <Button variant="contained" endIcon={<SendIcon />} type="submit">Submit changes</Button>
                    </Box>
                </form>
            </Modal>
            <Button onClick={openDeleteModal} variant="outlined" color="error">Delete</Button>
            {/* Delete Button Modal */}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={deleteModalOpen}
                onClose={closeDeleteModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <form>
                    <Box sx={style}>
                        <label for="id">Enter the ID of the bug that you want to delete</label>
                        <br></br>
                        <br></br>
                        <TextField required id="delete-id" label="Enter ID of bug to delete" 
                        variant="outlined" 
                        onChange={(event) => {setId(event.target.value)}} 
                        value = {id}
                        />
                    </Box> 
                </form>
            </Modal>



        </TableRow>

    )
}

export default BugTableCell;