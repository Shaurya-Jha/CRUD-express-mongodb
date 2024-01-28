var mongoose = require("mongoose");

// schema for the user
var schema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    firstName:{
        type: String,
        default:''
    },
    lastName:{
        type: String,
        default:''
    },
    phone:{
        type: String
    }
})

// generate the "User" model schema and export it to be used in other files
var user = new mongoose.model("User", schema);
module.exports = user;