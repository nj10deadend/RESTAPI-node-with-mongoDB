import express from 'express'
import bodyParser from 'body-parser';
import Bug from '../models/Bug.js';

const findBugRouter = express.Router();

findBugRouter.use(bodyParser.urlencoded({extended: true}));



export default findBugRouter;