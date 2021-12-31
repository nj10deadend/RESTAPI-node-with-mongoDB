import express from 'express'
import bodyParser from 'body-parser';
import Bug from '../models/Bug.js';


const allBugsRouter = express.Router();

allBugsRouter.use(bodyParser.urlencoded({extended: true}));



export default allBugsRouter;