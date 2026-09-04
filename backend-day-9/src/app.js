const express = require("express");
const app = express();
app.use(express.json());
const noteModel = require("./models/note.model");


app.post("/notes", async (req, res) => {
    const { title, description } = req.body
    const note = await noteModel.create({
        title, description
    })
    res.status(201).json({
        msg: "note created successfully",
        note
    })
})

app.get("/notes", async (req, res) => {
    const notes = await noteModel.find();

    res.status(200).json({
        msg: "data fetched successfully",
        notes
    })
})







module.exports = app;