const express = require('express');
var app = express();

app.get('/',function(req,res){
    res.render('index.ejs');    
});

app.get('/about',function(req,res){
    res.render('layout.ejs',{title : 'about title',body: '<h3>about us body dynamic</h3>'});
});

app.get('/about/:title',function(req,res){
    res.send('<h1>Hey '+req.params.title+'</h1>');
});

app.get('/*',function(req,res){
    res.status(404).render('error.ejs');    
});

app.listen(1337);