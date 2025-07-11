const mongoose= require('mongoose')
const UserSchema= new mongoose.Schema({
    username:{
        type: string, 
        required: true, unique:true, 
        trim: true},
    email:{
        type: string,
        require: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password:{
        type: string,
        require: true
    },
    role:{
        type: string,
        enum: ['user', 'admin', ], // only allow 'user or 'admin' roles
        default: 'user'
    }

}, {timestamps: true})


module.exports= mongoose.model('User', UserSchema)