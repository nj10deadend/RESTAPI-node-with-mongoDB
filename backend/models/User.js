import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    password: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String, 
        required: true,
        unique: true
    },
    admin: Boolean

})

const User = mongoose.model('User', userSchema);

export default User;