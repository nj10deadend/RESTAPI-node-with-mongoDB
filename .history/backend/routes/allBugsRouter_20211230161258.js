import express from 'express'
import bodyParser from 'body-parser';
import Bug from '../models/Bug.js';


const allBugsRouter = express.Router();

allBugsRouter.use(bodyParser.urlencoded({extended: true}));

allBugsRouter.get('/bugs', async (req, res) => {
    const bugs = await Bug.find();
    res.status(200).send(bugs);
})



export default allBugsRouter;