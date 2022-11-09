
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const path = require('path');
const con = require('./config/connection');



const bodyParser = require('body-parser')

app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());





app.use(express.static(__dirname + '/assets'));

app.use (bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded

app.use (bodyParser.urlencoded({extended:true}));



// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');







// use express router
app.use('/', require('./routes'));


app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
