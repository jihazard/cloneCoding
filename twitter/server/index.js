const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require(`body-parser`)


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