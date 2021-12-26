import mongoose from 'mongoose';

const bugSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    assignee: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
        // timestamps: true
    },
    time: {
        type: Date,
        default: Date.now
    }
})

const Bug = mongoose.model('Bug', bugSchema);

export default Bug;