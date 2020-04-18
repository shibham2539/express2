const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const Router = express.Router(); // it is mim express which can be export

const urlencodedParser = bodyParser.urlencoded({ extended: false })
const jsonParser = bodyParser.json();

Router.get('/add-products',(req,res,next) => { 
res.sendFile(path.join(__dirname,'../','views','add-product.html'));
});

/*
Router.post('/add-product',urlencodedParser,(req,res,next) =>{  // we can use same path by different req (same as github oauth)
    console.log(req.body)
    res.redirect('/');
});
*/

Router.post('/add-products',urlencodedParser,(req,res,next) =>{   // as here admin/addproduct will work
    console.log(req.body)
    res.redirect('/');
});

 
module.exports = Router;  // export





