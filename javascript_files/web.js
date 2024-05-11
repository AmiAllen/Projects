var express = require('express');
var ronaldo=express();

ronaldo.get('/',function(req,res){
    res.send('Hello');
});
ronaldo.listen(3, function () {
    console.log('ronaldo the greatest');
});