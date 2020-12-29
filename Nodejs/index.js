const http = require("http");
const path = require("path");
const fs = require("fs");


const server = http.createServer((req,res)=>{
    // if(req.url === "/"){
    //     fs.readFile(path.join(__dirname,"Public","index.html"),(err , data)=>{
    //         if (err!=null) throw err;
    //         res.writeHead(200 , {"Content-Type":"text/html"});
    //         res.end(data);
    //     })
    // }
    // if(req.url==="/users"){
    //     const users = [
    //         {
    //             name :"Prateek",
    //             age : 19
    //         },
    //         {
    //             name : "Enforc3r",
    //             age :20
    //         }
    //     ]
    //     res.writeHead(200 , {"Content-Type":"application/json"});
    //     res.end(JSON.stringify(users));
    // }

    //More Effecient way of handling Stuff
    let pathVar = path.join(__dirname , "Public" , req.url==="/" ? "index.html" : req.url );
    
    const ContentType = {};

    console.log(path.extname(pathVar));
    
    switch(path.extname(pathVar)){
        case ".js":
            ContentType.ContentType="text/javascript";
            break;
        case ".html":
            ContentType.ContentType= "text/html";
            break;
        case ".jpg":
            ContentType.ContentType="image/jpg";
            break;
        case ".css":
            ContentType.ContentType="text/css";
            break;
        case ".png":
            ContentType.ContentType="image/png";
            break;
        case ".json":
            ContentType.ContentType="application/json";
            break;
    }
    
    console.log(pathVar);
        fs.readFile(pathVar,(err,data)=>{
            if(err!=null){
                if(err.code=="ENOENT"){
                    fs.readFile(path.join(__dirname,"Public","404.html") , (err,data)=>{
                        if(err) throw err;
                        res.writeHead(404 , {"Content-Type": "text/html"});
                        res.end(data,"utf-8");
                    })
                }else{
                    res.writeHead(500);
                    res.end(`<h1>Error Occured </h1>     ${err.code}`);
                }
            }else{
                res.writeHead(200,JSON.stringify(ContentType));
                res.end(data);
            }
        })
})

const port = process.env.PORT || 8080;

server.listen(port , ()=>console.log("Listening On " ,port));