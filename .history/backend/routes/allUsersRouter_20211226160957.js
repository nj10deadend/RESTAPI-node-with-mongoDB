import express from 'express'
import mongoose from 'mongoose';
import User from '../models/User.js';
import bodyParser from 'body-parser';

const allUsersRouter = express.Router();


allUsersRouter.use(bodyParser.urlencoded({extended: true}));

// allUsersRouter.use(express.json());
// allUsersRouter.use(express.urlencoded({ extended: false }));

allUsersRouter.get('/users', (req, res) => {

    res.send(User.find().json({ extended: false }));

})

// export {allUsersRouter};
export default allUsersRouter;