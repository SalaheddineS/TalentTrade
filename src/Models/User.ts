import {model,Schema} from 'mongoose';
import Skill from './Skill';

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    
    number: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: false,
        default: process.env.Avatar
    },
    skills: {
        type: [],
        minItems: 1,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

export default model('User', userSchema);



