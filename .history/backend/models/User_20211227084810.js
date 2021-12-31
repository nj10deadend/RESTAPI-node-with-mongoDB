import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    password: {
        type: String,
        required: [true, 'User password can\'t be blank'],
        unique: true
    },
    email: {
        type: String, 
        required: [true, 'User email can\'t be blank'],
        unique: true
    },
    admin: {
        type: Boolean,
        default: false
    }

})

const User = mongoose.model('User', userSchema);

export default User;