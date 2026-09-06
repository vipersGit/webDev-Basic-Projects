// REQUIRED PACKAGES
const cors = require("cors");
const express = require("express");
const noteModel = require("./models/notes.model");
const path = require("path");

// EXECUTABLE PACKAGES
const app = express();


// MIDDLE-WARES
app.use(express.json());
app.use(cors());
app.use(express.static("./public"));


// REST APIs
app.get("/notes", async (req, res) => {
    const notes = await noteModel.find();

    res.status(200).json({
        msg: "notes were fetched",
        notes: notes
    })
})

app.post("/notes", async (req, res) => {
    const { name, gender, age } = req.body;
    const note = await noteModel.create({
        name, gender, age
    })
    res.status(201).json({
        msg: "a note was created",
        note: note
    })
})

app.patch("/notes/:id", async (req, res) => {
    const { name } = req.body;
    const note = await noteModel.findByIdAndUpdate(req.params.id, {
        name
    })
    res.status(200).json({
        msg: "a note was partially updated",
        note: note
    })

})

app.put("/notes/:id", async (req, res) => {
    const { name, gender, age } = req.body;
    const note = await noteModel.findByIdAndUpdate(req.params.id, {
        name, gender, age
    })
    res.status(200).json({
        msg: "a note was completely updated",
        note: note
    })
})

app.delete("/notes/:id", async (req, res) => {
    await noteModel.findByIdAndDelete(req.params.id);
    res.status(204).json({
        msg: "a note was deleted",
    })
})


app.use("*name", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "/public/index.html"))
})


module.exports = app;
