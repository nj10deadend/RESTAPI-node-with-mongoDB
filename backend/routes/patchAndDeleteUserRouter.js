import express from 'express'
import User from '../models/User.js';
import bodyParser from 'body-parser';

const patchAndDeleteUserRouter = express.Router();

patchAndDeleteUserRouter.use(bodyParser.urlencoded({extended: true}));

patchAndDeleteUserRouter.patch('/users/update/:_id', async (req, res) => {

    const id = req.params._id

    let foundUser = await User.find({_id: id})

    if (!foundUser) {
        console.log("User not found")
        return res.status(404).send("The user with the provided id does not exist");
    }
    if (req.body.name) {
        await User.updateOne({_id: id}, {name: req.body.name})
    }
    if (req.body.password) {
        await User.updateOne({_id: id}, {password: req.body.password})
    }
    if (req.body.email) {
        await User.updateOne({_id: id}, {email: req.body.email})
    }
    if (req.body.admin) {
        await User.updateOne({_id: id}, {admin: req.body.admin.toLowerCase() === 'true'})
    }

    console.log("User successfully updated")
    res.status(200).send(foundUser)


})

export default patchAndDeleteUserRouter;