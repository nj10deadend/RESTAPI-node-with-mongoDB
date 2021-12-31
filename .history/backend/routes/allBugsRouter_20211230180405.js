import express from 'express'
import bodyParser from 'body-parser';
import Bug from '../models/Bug.js';


const allBugsRouter = express.Router();

allBugsRouter.use(bodyParser.urlencoded({extended: true}));

allBugsRouter.get('/bugs', async (req, res) => {
    const bugs = await Bug.find();
    res.status(200).send(bugs);
})
allBugsRouter.post('/bugs', async (req, res) => {
    console.log(req.body);
    let reqTitle = req.body.title;
    let reqDescription = req.body.description;
    let reqAssignee = req.body.assignee;
    let foundObj = Bug.find({title: reqTitle, description: reqDescription, assignee: reqAssignee});
    let newBug;

    if (foundObj.length) {
        console.log("Bug with given assignee and description already exists in database")
        res.send("Bug with given assignee and description already exists in database");
    } else {
        newBug = {
            title: req.body.title,
            description: req.body.description,
            assignee: req.body.assignee
        }
        await Bug.create(newBug);
        console.log("Bug successfully added to database")

    }

    res.status(201).send(newBug);
})



export default allBugsRouter;