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
    let reqName = req.body.name;
    let foundName = User.find({name: reqName});
    let newUser;

    if (foundName.length) {
        console.log("User already exists in database")
        res.send("User already exists in database");
    } else {
        let parsedBoolAdmin;
        if (typeof(req.body.admin) === "string") {
            parsedBoolAdmin = req.body.admin.toLowerCase() === "true"
        } else {
            parsedBoolAdmin = req.body.admin
        }
        newUser = {
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
            admin: parsedBoolAdmin
        }
        await User.create(newUser);
        console.log("User successfully added to database")

    }

    res.status(201).send(newUser);
})

// export {allUsersRouter};
export default allUsersRouter;