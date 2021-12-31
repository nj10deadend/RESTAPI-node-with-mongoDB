import express from 'express'
import User from '../models/User.js';
import bodyParser from 'body-parser';

const findUserRouter = express.Router();

findUserRouter.use(bodyParser.urlencoded({extended: true}));

findUserRouter.get('/users/:id', async (req, res) => {
    const id = req.params._id

    let foundUser = User.find({_id: id})

    if (!foundUser) {
        console.log('User not found')
        res.status(404).send('User not found in database')
    } else {
        res.status(200).send(foundUser);
    }
})

export default findUserRouter;