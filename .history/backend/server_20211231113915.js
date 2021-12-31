import express from 'express'
import bodyParser from 'body-parser';
const app = express();
import cors from 'cors';
const port = 8080;
import mongoose from 'mongoose';
import connectDB from './config/db.js'
import User from './models/User.js';
import Bug from './models/Bug.js';
//// Users route imports /////
import allUsersRouter from './routes/allUsersRouter.js';
import findUserRouter from './routes/findUserRouter.js';
import patchAndDeleteUserRouter from './routes/patchAndDeleteUserRouter.js';
///// Bugs route imports /////
import allBugsRouter from './routes/allBugsRouter.js';
import findBugRouter from './routes/findBugRouter.js';


////////////////////////////////////////////////////////////////
connectDB();
// function to create a new user or a new bug

// createUser();

// createBug();

////

async function createUser () {
    const newUser = await User.create({
        name: 'Naseer',
        password: 'DeadendPassword229',
        email: 'nasjacks10@gmail.com',
        admin: true

    })
    console.log(newUser);
}

async function createBug () {
    const newBug = await Bug.create({
        title: 'Server not connecting',
        description: 'MongoDB server isn\'t connecting to Mongo Compass',
        assignee: 'Naseer'
    })
    console.log(newBug);
}

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//// routes ////////

//// User routes ///
app.use('/', allUsersRouter);
app.use('/', findUserRouter);
app.use('/', patchAndDeleteUserRouter);

//// Bug routes ////////
app.use('/', allBugsRouter);
app.use('/', findBugRouter);


//////////////////////


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});


/// error handler

app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: err
    });
});


app.listen(port, () => {
    console.log(`Express server listening at http://localhost:${port}`)
})

// module.exports = app;
export default app;