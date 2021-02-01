import mongoose from 'mongoose';
const {
    Schema
} = mongoose;


const userSchema = new Schema({
    username: String,
    email : String,
    fullname : String,
    password : String
});

export const Usuario = mongoose.model('Usuario', userSchema);