const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname+'/public');
app.use(express.static(publicPath));
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '/public/index.html'));
})

app.listen(3000, ()=>{
    console.log("Listening on port number 3000");
})