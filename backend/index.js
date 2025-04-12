const express = require("express");
const app = express();
const port = 3000;
const cors = require('cors');


app.use(cors());
app.use(express.json());
app.listen(port, (error) =>{
    if(!error) {
        console.log("server is running properly in port: " + port);
    } else {
        console.log("There is an error: " + error);
    }
});