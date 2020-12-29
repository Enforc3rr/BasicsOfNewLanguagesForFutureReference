const fileSys = require("fs");
const path = require("path");

// fileSys.mkdir(path.join(__dirname,"newFolder") , {} , err => {
//     if(err!=null){
//         throw err;
//     }
//     console.log("Folder Created")
// })

//Making And Writing To File

// fileSys.writeFile(path.join(__dirname,"/newFolder","Hello.txt"),"Hello There" , err => {
//     if(err!=null) throw err ;
//     console.log("File Made........");

//     //Appending
//     fileSys.appendFile(path.join(__dirname,"/newFolder","Hello.txt")," Appending This" , err => {
//         if(err!=null) throw err ;
//         console.log("File Appended........");
//     })
// })

//Reading THe FIle

// fileSys.readFile(path.join(__dirname,"/newFolder","Hello.txt"),"utf8",(err , data) =>{
//     if(err!=null) throw err ;
//     console.log("Text in FIle " , data);
// })

//Renaming

fileSys.rename(path.join(__dirname,"/newFolder","Hello.txt"),path.join(__dirname,"/newFolder","NewName.txt"),err =>{
    if(err!=null) throw err ;
    console.log("Renamed The File");
})