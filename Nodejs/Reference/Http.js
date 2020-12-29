const http = require("http");

http.createServer((req,res)=>{
    res.write("Hello There");
    res.end();
}).listen(8080,()=>console.log("Server Started"));