import express from 'express'
import bodyParser from 'body-parser';
import Bug from '../models/Bug.js';

const patchAndDeleteBugRouter = express.Router();

patchAndDeleteBugRouter.use(bodyParser.urlencoded({extended: true}));

patchAndDeleteBugRouter.patch('/bugs/update/:_id', async (req, res) => {

    const id = req.params._id

    let foundBug = await Bug.find({_id: id})

    if (!foundBug) {
        console.log("Bug not found")
        return res.status(404).send("The bug with the provided id does not exist");
    }
    if (req.body.title) {
        await Bug.updateOne({_id: id}, {title: req.body.title});
    }
    if (req.body.description) {
        await Bug.updateOne({_id: id}, {description: req.body.description});
    }
    if (req.body.assignee) {
        await Bug.updateOne({_id: id}, {assignee: req.body.assignee});
    }
    if (req.body.date) {
        await Bug.updateOne({_id: id}, {date: req.body.date});
    }
    if (req.body.due_date) {
        await Bug.updateOne({_id: id}, {due_date: req.body.due_date});
    }

    console.log("Bug successfully updated")
    res.status(200).send(foundBug)
})

patchAndDeleteBugRouter.delete('/bugs/delete/:_id', async (req, res) => {
    const id = req.params._id
    let foundBug = await Bug.find({_id: id})
    if (!foundBug) {
        console.log("Bug not found")
        return res.status(404).send("The bug with the provided id does not exist");
    } else {
        await Bug.deleteOne({_id: id})
        console.log("Bug successfully deleted");
        return res.status(200).send(foundBug);
    }
})


export default patchAndDeleteBugRouter;