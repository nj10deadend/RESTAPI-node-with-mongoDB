import express from 'express'
import User from '../models/User.js';
import bodyParser from 'body-parser';

const allUsersRouter = express.Router();

allUsersRouter.use(bodyParser.urlencoded({extended: true}));

allUsersRouter.get('/users', async (req, res) => {

    const users = await User.find()
    res.status(200).send(users);

})


allUsersRouter.post('/users', async (req, res) => {
    console.log(req.body);
})

// export {allUsersRouter};
export default allUsersRouter;