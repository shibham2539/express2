const express = require('express');
const path = require('path');

const Router = express.Router();

Router.get('/',(req,res,next) => {  
    console.log("i am the homepage");
  //  res.send('<h1>this is home page</h1>'); 
    // res.sendFile('/views/shop.html');
    res.sendFile(path.join(__dirname,'../','views','shop.html')); 

    /* dirname = yur directory
    ../ means root k bahar mtlb mei express2 k folder
 */
});


module.exports = Router;
