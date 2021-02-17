const express = require("express");

const app = express();

app.get("/",function(request, response){
    response.send("Hello World");
})

app.listen(3000,function(){
    console.log("server is running in a port 3000");
})