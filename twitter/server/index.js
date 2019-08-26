const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require(`body-parser`)
var Filter = require('bad-words'),
    filter = new Filter();
const monk  = require('monk');
const db = monk('mongodb://psyche2823:aaaaaaaa@localhost:27017/admin')
const mewsDb = db.get('mews')






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


app.get("/",(req,res)=>{
    res.json({
        message : "mew!!!!!"
    })
})
app.get("/mews",(req,res)=>{
    mewsDb.find({}, {sort: {'_id': -1}})
    .then(result => {
        res.json(result)
    })
})
app.post("/mews", (req,res) => {
    const name = req.body.name;
    const content = req.body.content;

    if(isValidMew(req.body)){
        const mew = {
            name : filter.clean(req.body.name.toString()),
            content : filter.clean(req.body.content.toString()),
            created: new Date()
        }
        mewsDb.insert(mew)
        .then(result => {
            
            res.json(result)
            
        })
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


