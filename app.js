const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); 



const adminroutes = require('./routes/admin');   // import
const shoproutes = require('./routes/shop');


const app = express();

const urlencodedParser = bodyParser.urlencoded({ extended: false })
const jsonParser = bodyParser.json();

app.use('/admin',adminroutes);  // fltering the path by adding admin on starting
app.use(shoproutes);

app.use(express.static(path.join(__dirname,'public')));  // for external css as this allows to load


app.use('/',(req,res,next) =>{
    res.status(404).sendFile(path.join(__dirname,'/','views','404.html')); //sendfile is for importing path
});


app.listen(3000); //shortcut for below 2 line code
//const server = http.createServer(app);
//server.listen(3000);
