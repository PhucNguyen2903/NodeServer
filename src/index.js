const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3001;

//route
const route = require("./routes")


app.use(express.static(path.join(__dirname, 'resources/public')));

app.use(express.urlencoded({extended: true}));
app.use(express.json());



// XMLHttpRequest, Fetch, axios, 

//HTTP logger
// app.use(morgan('combined'))

//Template engine 
app.engine('.hbs', handlebars.engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, '/resources/views'));

// Home, search, contact


//Route Init
route(app);




app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
