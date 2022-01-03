import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import TextField from '@mui/material/TextField';
// import Typography from '@mui/material/Typography';
import SendIcon from '@material-ui/icons/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import {useState} from 'react';
import axios from 'axios';

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
    const [patchId, setPatchId] = useState("");
    const [deleteId, setDeleteId] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [assignee, setAssignee] = useState("");
    const [date, setDate] = useState("");
    const [dueDate, setDueDate] = useState("");

    const [rowStyle, setRowStyle] = useState("no-highlight");


    const openPatchModal = () => setPatchModalOpen(true);
    const closePatchModal = () => setPatchModalOpen(false);

    const openDeleteModal = () => setDeleteModalOpen(true);
    const closeDeleteModal = () => setDeleteModalOpen(false);

    async function patchRequest () {
        await axios.patch(`http://localhost:8080/bugs/update/${patchId}`, {
            title: title,
            description: description,
            assignee: assignee,
            date: date,
            due_date: dueDate,
        })
    }
    async function deleteRequest () {
        await axios.delete(`http://localhost:8080/bugs/delete/${deleteId}`)
    }

    async function updateBug (event) {
        event.preventDefault();
        setPatchId("");
        setTitle("");
        setDescription("");
        setAssignee("");
        await patchRequest();
        closePatchModal();
        highlightedRow();
        getFetchAllBugs();
    }

    async function deleteBug (event) {
        event.preventDefault();
        setDeleteId("");
        await deleteRequest();
        closeDeleteModal();
        highlightedRow();
        getFetchAllBugs();
    }

    const highlightedRow = () => {
        const today = new Date();
        const currentDate = new Date(today.getFullYear()+ '-' +(today.getMonth() + 1) + '-' + today.getDate());
        console.log(currentDate);
        const dueDateObj = new Date(dueDate);
        console.log(dueDateObj);
        console.log(currentDate >= dueDateObj);
        if (currentDate >= dueDateObj) {
            setRowStyle("highlighted")
        } else {
            setRowStyle("no-highlight")
        }
    }

    function daysRemaining() {
        const today = new Date();
        const currentDate = new Date(today.getFullYear()+ '-' +(today.getMonth() + 1) + '-' + today.getDate());
        const dueDateObj = new Date(dueDate);
        console.log(currentDate);
        console.log(dueDateObj);
        console.log(currentDate.getDate());
        // console.log(dueDateObj.getDate());
        const dateFormatDD = new Date(eachBug.due_date);
        console.log(dateFormatDD);
        console.log(currentDate.getDate() - dateFormatDD.getDate());
        return currentDate.getDate() - dateFormatDD.getDate();
    }
    // daysRemaining();

    // console.log(dueDate);


    // highlightedRow();

    return (
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            className={rowStyle}
        >
            <TableCell component="th" scope="row">{eachBug.title}</TableCell>
            <TableCell align="right">{eachBug._id}</TableCell>
            <TableCell align="right">{eachBug.description}</TableCell>
            <TableCell align="right">{eachBug.assignee}</TableCell>
            <TableCell align="right">{eachBug.time}</TableCell>
            <TableCell align="right">{eachBug.date}</TableCell>
            <TableCell align="right">{daysRemaining()}</TableCell>
            <TableCell align="right">{eachBug.due_date}</TableCell>
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
                <form onSubmit={updateBug}>
                    <Box sx={style}>
                        <Box>
                            <label for="id">Enter the ID of the bug that you want to edit</label>
                            <br></br>
                            <br></br>
                            <TextField required id="id-input" label="Enter ID of Bug to Edit"
                            variant="outlined" 
                            onChange={(event) => {setPatchId(event.target.value)}} 
                            value = {patchId}
                            />
                        </Box>
                        <Box>
                            <label for="title">Title</label>
                            <br></br>
                            <br></br>
                            <TextField id="titleInput" label="Enter general title for bug" 
                            variant="outlined" 
                            onChange={(event) => {setTitle(event.target.value)}} 
                            value = {title}
                            />
                        </Box>
                        <Box>
                            <label for="description">Description</label>
                            <br></br>
                            <br></br>
                            <TextField id="descInput" label="Enter description of issue/bug" 
                            variant="outlined" 
                            onChange={(event) => {setDescription(event.target.value)}} 
                            value = {description}
                            />
                        </Box>
                        <Box>
                            <label for="assignee">Assignee</label>
                            <br></br>
                            <br></br>
                            <TextField id="assigneeInput" label="Enter name of person assigned this bug (optional)" 
                            variant="outlined" 
                            onChange={(event) => {setAssignee(event.target.value)}} 
                            value = {assignee}
                            />
                        </Box>
                        <Box>
                            <label for="date">Date</label>
                            <br></br>
                            <br></br>
                            <TextField id="date-input" label="Enter Date (YYYY-MM-DD)"
                            variant="outlined" 
                            onChange={(event) => {setDate(event.target.value)}} 
                            value = {date}
                            />
                        </Box>
                        <Box>
                            <label for="due-date">Due Date</label>
                            <br></br>
                            <br></br>
                            <TextField id="due-date-input" label="Enter Due Date (YYYY-MM-DD)"
                            variant="outlined" 
                            onChange={(event) => {setDueDate(event.target.value)}} 
                            value = {dueDate}
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
                <form onSubmit={deleteBug}>
                    <Box sx={style}>
                        <Box>
                            <label for="id">Enter the ID of the bug that you want to delete</label>
                            <br></br>
                            <br></br>
                            <TextField required id="delete-id" label="Enter ID of bug to delete" 
                            variant="outlined" 
                            onChange={(event) => {setDeleteId(event.target.value)}} 
                            value = {deleteId}
                            />
                        </Box>
                        <br></br>
                        <Button type="submit" variant="outlined" color="error" startIcon={<DeleteIcon />}>Delete Bug</Button>
                    </Box> 
                </form>
            </Modal>



        </TableRow>

    )
}

export default BugTableCell;