const http = require("http");

const server = http.createServer((req, res) => {
   let body = [];
   req.on("data",chunk => {
       // console.log(chunk);
       // console.log(chunk.toString());
       body.push(chunk);
       // console.log(body);
   }).on("end",()=>{
       body = Buffer.concat(body);
       // console.log(body);
       // console.log(body.toString());
       body = body.toString();

       let statusCode = 404 ;
       let response = {
           success : false ,
           data : null
       }
       if(req.method==="GET" && req.url==="/api"){
           statusCode = 200 ;
           response.success = true ;
           response.data = api;
       }else if(req.method==="POST" && req.url==="/api"){
           statusCode = 201 ;
           response.success = true;
           console.log(body);
           const {id , name} = JSON.parse(body);
           if(!id || !name)
           {
               statusCode = 400;
           }else{
               console.log({id  , name});
               api.push({id,name});
               console.log(api);
               response.data = api;
           }
       }
       res.writeHead(statusCode , {
           "Content-Type" : "application/json",
           "X-Powered-By": "Node.Js"
       });
       // console.log(JSON.stringify(response));
       res.end(JSON.stringify(response) , ()=>console.log("ENDED RESPONSE"));
   });
   /*when res.end is placed here , then response connection will be dropped before req.on("end..) is called bcuz
   req.on("end"..) is called when whole data is consumed and is async by nature . so , maybe after emitting "data"
   program moves down to end the response then after that "end" gets it's work done and is called.
   But when i have kept res.end in on.("end") . so , it will have synchronously.
    */
});

const api = [
    {
        id:1,
        name : "Prateek",
        lang: "Java"
    },
    {
        id:2,
        name : "Prateek Kumar",
        lang: "JavaScript"
    },
    {
        id:3,
        name : "Prateek Kumar Tiwari",
        lang: "Golang"
    }
]

const PORT = process.env.PORT || 8080 ;

server.listen(PORT , ()=> console.log(`Server is running on ${PORT}`));
