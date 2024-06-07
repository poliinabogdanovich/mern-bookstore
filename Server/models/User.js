import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    phoneNumber: {type: String},
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    address: {type: String}
})

const userModel = mongoose.model('User', userSchema)
export {userModel as User}