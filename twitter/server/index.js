const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require(`body-parser`)
const monk = require('monk')
const mongoose = require('mongoose');

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://psyche2823:aaaaaaaa@cluster0-yov3s.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log("접속")
  client.close();
});

app.use(cors());
app.use(express.json())

app.get("/", (req,res) => {
    res.json({
        message : "hello mew"
    })
})

function isValidMew(mew) {
    return mew.name && mew.name.toString().trim() !== '' &&
           mew.content && mew.content.toString().trim() !== '' 
}

app.post("/mews", (req,res) => {
    const name = req.body.name;
    const content = req.body.content;

    if(isValidMew(req.body)){
        const mew = {
            name : req.body.name,
            content : req.body.content
        }
        console.log(mew)
    }else {
        console.log("nonono")
        res.status(422);
        res.json({
            message: "HEY NAME AND CONTENT ARE REQUIRED" 
        })
    }
})



app.listen(500,() => {
    console.log('server live! port : 500')
})