const url = require("url");

const myUrl = new URL("http://www.google.com:8080/hello.html?id=100&status=active");

console.log(myUrl.href);

console.log(myUrl.host);
console.log(myUrl.hostname);

console.log(myUrl.pathname);

console.log(myUrl.search);
console.log(myUrl.searchParams);
myUrl.searchParams.append("type","customer");

console.log(myUrl.searchParams);
console.log(myUrl.href);

myUrl.searchParams.forEach((value , key)=>console.log(`${key} : ${value}`))

