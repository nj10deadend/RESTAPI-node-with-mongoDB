import express from 'express'
import bodyParser from 'body-parser';
import Bug from '../models/Bug.js';


const patchAndDeleteBugRouter = express.Router();

patchAndDeleteBugRouter.use(bodyParser.urlencoded({extended: true}));