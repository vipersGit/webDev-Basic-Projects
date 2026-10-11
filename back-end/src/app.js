// REQUIRED PKGs
const express = require("express");
const noteModel = require("./models/note.model");
const cors = require("cors");
const path = require("path");
// PKGs EXECUTION
const app = express();


// MIDDLE-WARES
app.use(express.json());
app.use(cors());
app.use(express.static("./public"))

app.post("/api/notes", async (req, res) => {
    const { title, description } = req.body;

    const note = await noteModel.create({
        title, description
    })

    res.status(201).json({
        msg: "a note was created",
        note: note
    })
})

app.get("/api/notes", async (req, res) => {
    const notes = await noteModel.find();
    res.status(200).json({
        msg: "notes were fetched",
        notes: notes
    })
})

app.patch("/api/notes/:id", async (req, res) => {
    const { title } = req.body;
    const note = await noteModel.findByIdAndUpdate(req.params.id, { title })
    res.status(200).json({
        msg: "a note was partially updated",
        note: note
    })
})

app.put("/api/notes/:id", async (req, res) => {
    const { title, description } = req.body;
    const note = await noteModel.findByIdAndUpdate(req.params.id, {
        title, description
    })
    res.status(200).json({
        msg: "a note was completely updated or replaced",
        note: note
    })
})

app.delete("/api/notes/:id", async (req, res) => {
    await noteModel.findByIdAndDelete(req.params.id);
    res.status(204).json({});
})

app.use("*name", async (req, res) => {
    res.sendFile(path.join(__dirname, "..", "/public/index.html"));
})



module.exports = app;