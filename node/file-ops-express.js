const { response } = require('express');
const express = require('express')
const app = express()

const fs = require('fs')

app.get('/write', (req, res) => {
    fs.writeFile('temp.txt', "This is a temp file",
        (err) => {
            if(err) {
                console.log(err)
            } else {
                response.send('File Written');
            }
        },
    );
});

app.get('/read', (req, res) => {
    fs.readFile('temp.txt', 
        (err, fileContents) => {
            if(err) {
                console.log(err)
            } else {
                response.send(fileContents);
            }
        },
    );
});