const express = require('express');
const app = express();


app.get("/", (req,res) => {
    res.json({
        message : "hello mew"
    })
})

app.post("/mews", (req,res) => {
    const name = req.body.name;
    const content = req.body.content;
    
    console.log(name , content);
    
    
    res.json({
        message : "hello mew"
    })
})



app.listen(500,() => {
    console.log('server live! port : 500')
})