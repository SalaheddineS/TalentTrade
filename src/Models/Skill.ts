import {Schema,model} from 'mongoose';
import  Skill  from '../Enums';
import MainSkill  from '../Enums';
const skillSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum:MainSkill
    },
    subcategory: {
        type: String,
        required: true,
        enum:Skill
    },
    level: {
        type: String,
        required: true
    },
    BestCertification: {
        type: String,
        required: false
    },
    BestCertificationLink: {
        type: String,
        required: false
    },
    BestCertificationImage: {
        type: String,
        required: false,
        default: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-vector%2Fcertificat'
    },
    date: {
        type: Date,
        default: Date.now
    }
});

export default model('Skill', skillSchema);