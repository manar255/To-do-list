const path=require('path');
const express= require('express');

const bodyParser = require('body-parser');

const app=express();

const tasksRouter =require('./routes/task')

//database conection
const mongoConnect = require('./util/database').mongoConnect;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//view engine ==> (ejs)
app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(tasksRouter);


mongoConnect((client)=>{
    console.log(client);
    app.listen(5000);
    })