const Path = require("path");

//File Name
console.log(Path.basename(__filename));

//Directory Name

console.log(Path.dirname(__filename));

// Extension Name

console.log(Path.extname(__filename));

//Parsing Details To Object 

console.log(Path.parse(__filename));

//Join

console.log(Path.join(__dirname , "test"));