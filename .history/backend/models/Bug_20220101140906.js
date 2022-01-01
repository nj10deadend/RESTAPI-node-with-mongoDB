import mongoose from 'mongoose';

const today = new Date();
const date = today.getFullYear()+ '-' +(today.getMonth() + 1) + '-' + today.getDate();
const dueDate = today.getFullYear()+ '-' + (today.getMonth() + 1) + '-' + (today.getDate() + 3);

const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

const bugSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Bug title can\'t be blank']
    },
    description: {
        type: String,
        required: [true, 'Bug description can\'t be blank']
    },
    assignee: {
        type: String
    },
    date: {
        type: Date,
        default: date
    },
    due_date: {
        type: Date,
        default: dueDate

    },
    time: {
        type: String,
        default: time
    }
    
})

const Bug = mongoose.model('Bug', bugSchema);

export default Bug;