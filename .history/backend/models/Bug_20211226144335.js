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
    data: {
        timestamps: true
    },
    time: {
        timestamps: true
    }

})