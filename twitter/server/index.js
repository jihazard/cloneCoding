const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require(`body-parser`)
var Filter = require('bad-words'),
    filter = new Filter();
const monk  = require('monk');
const db = monk(process.env.MONGO_URI || 'mongodb://psyche2823:aaaaaaaa@localhost:27017/admin')
const mewsDb = db.get('mews')

const rateLimit = require("express-rate-limit");
const limiter = rateLimit({
    windowMs: 30 * 1000, // 15 minutes
    max: 1 , // limit each IP to 100 requests per windowMs
    message:
    "Too many accounts created from this IP, please try again after an hour"
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

app.use(rateLimit({
    windowMs:30 *1000,
    max : 1,
    message : "너무 많은 접속 ip 뻐큐나 먹어" 
}))

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


