import express from 'express'
import mongoose from 'mongoose';
import User from '../models/User.js';
import bodyParser from 'body-parser';

const allUsersRouter = express.Router();


allUsersRouter.use(bodyParser.urlencoded({extended: true}));


allUsersRouter.get('/users', async (req, res) => {

    const users = await User.find()

    res.send(users);

})

// export {allUsersRouter};
export default allUsersRouter;