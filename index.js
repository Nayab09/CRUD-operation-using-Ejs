const express = require('express');
const app = express();
const path = require('path')
const logger = require('./MiddleWare/logger');


//-- using the middle ware
//app.use(logger); // to initialize the middle ware

//iniy body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// -----Set a static folder  -- if we dont use statis we have to put route to each and every page manually.
//app.use(express.static(path.join(__dirname,'public')));
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>
console.log(`Server is running on ${PORT}`));

// reqiure from the router
app.use('/api/members',require('./routers/api/members'));


// ---Sending individual route 
// app.get('/',(req,res)=>
// {
//     res.sendFile( path.join( __dirname,'public','index.html'));
//    // res.send("<h1>Hello World!!</h1>");
// });