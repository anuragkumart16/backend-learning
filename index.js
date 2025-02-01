require('dotenv').config()
/* this is the script which will be executed by the script when npm run start is entered */

const path = require('path');

/* here we are importing express and storing it in a constant variable , looks like we cant change the configs of express */
const express = require("express"); //this is a function


const app = express();  //express initialises the express app instance which is a object and stores that instance object in app variable

const port = process.env.PORT; //listening port is being set up here

/* here app is a object and we are refrencing the get function form it and calling it by passing  parameters which include a string and a callback function */
app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.get('/twitter',(req,res)=>{
    res.send(`<h1>you landed on twitter endpoint</h1>`)
})

//  we can pass html object here too,
// this is sending a template here
app.get('/index',(request,response)=>{
    response.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});



