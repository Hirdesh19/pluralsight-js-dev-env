import express from 'express';
import path from 'path';
import open from 'open';


var port=2200;
var app=express();

app.get('/',function(req,res){
res.sendFile(path.join(__dirname,'../src/index.html'))
});

app.listen(port,function(err){
if (err){
  console.log(err)
}
else{
  open('http://localhost:'+port)
};
})
