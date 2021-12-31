import mongoose from 'mongoose';

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
        default: Date.now
    },
    time: {
        type: Date,
        default: Date.now
    }
    
})

const Bug = mongoose.model('Bug', bugSchema);

export default Bug;