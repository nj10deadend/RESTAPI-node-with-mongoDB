import express from 'express'
import mongoose from 'mongoose';
import User from '../models/User.js';

const allUsersRouter = express.Router();

allUsersRouter.get('/users', (req, res) => {

    res.send(User.find());

})

// export {allUsersRouter};
export default allUsersRouter;