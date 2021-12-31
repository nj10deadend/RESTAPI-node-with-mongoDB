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
        await Bug.updateOne({_id: id}, {name: req.body.title})
    }
    if (req.body.description) {
        await Bug.updateOne({_id: id}, {password: req.body.description})
    }
    if (req.body.assignee) {
        await Bug.updateOne({_id: id}, {email: req.body.assignee})
    }

    console.log("Bug successfully updated")
    res.status(200).send(foundBug)


})

patchAndDeleteBugRouter.delete('/bugs/delete/:_id', async (req, res) => {
    const id = req.params._id
    let foundBug = await Bug.find({_id: id})


})


export default patchAndDeleteBugRouter;