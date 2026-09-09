const mongoose = require("mongoose");


const noteSchema = new mongoose.Schema({
    name: String,
    gender: String,
    age: Number
})


const noteModel = mongoose.model("Note", noteSchema);
module.exports = noteModel;