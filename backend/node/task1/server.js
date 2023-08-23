const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { model } = require("./db");

app.use(bodyParser.json());

app.get("/notes", async (req, res) => {
    let author = req.query.author;
    let data = [];

    if (author) {
        data = await model.findAll({where: { author: author}, raw: true,});
    } else {
        data = await model.findAll({raw: true,});
    }

    res.send({notes: data || []});
});

app.get("/notes/:id", async (req, res) => {
    const id = req.params.id;
    let data = await model.findByPk(id, {raw: true,});

    if (!data) return res.sendStatus(404);
    
    return res.send({note: data || {}});
});

app.post("/notes", async (req, res) => {
    const body = req.body;

    try {
        if (!body.author || !body.content) {
            return res.sendStatus(422);
        }

        await model.create(body);
    } catch(err) {
        res.sendStatus(500);
    }
    res.sendStatus(201);
});

// Do not change the export from this file
module.exports = app;
