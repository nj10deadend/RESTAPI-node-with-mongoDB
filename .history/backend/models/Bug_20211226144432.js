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
        timestamps: true
    },
    time: {
        timestamps: true
    }

})

const Bug = mongoose.model('Bug', bugSchema);

export default Bug;