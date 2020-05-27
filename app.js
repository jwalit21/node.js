
//modue dependencies
const express = require('express');
const nib = require('nib');
const stylus = require('stylus');

//initialization of express
var app = express();
var portnumber = 1337;

function compiles(str,path){
    return stylus(str)
    .set('filename',path)
    .use(nib())
}

//initializing of views
app.set('views',__dirname+'/views');

//initalizing jade
app.set('view engine','jade');

//stylus middleware
app.use(stylus.middleware(
    {
        src: __dirname+'/public',
        compile: compiles, 
    }
));

app.use(express.static(__dirname+'/public'));

//render index page
app.get('/',function(req,res){
   res.render('index',
   {
       title: 'stylus and jade and nib index page',       
   }
   ) 
});

app.listen(portnumber);
console.log('listening');