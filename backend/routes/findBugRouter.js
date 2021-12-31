import express from 'express'
import bodyParser from 'body-parser';
import Bug from '../models/Bug.js';

const findBugRouter = express.Router();

findBugRouter.use(bodyParser.urlencoded({extended: true}));

findBugRouter.get('/bugs/:_id', async (req, res) => {
    const id = req.params._id

    const foundBug = await Bug.find({_id: id})

    if (!foundBug) {
        console.log('Bug not found')
        res.status(404).send('Bug not found in database')
    } else {
        console.log('Bug successfully found')
        res.status(200).send(foundBug);
    }
})



export default findBugRouter;