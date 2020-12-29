const languagues = [
    {
        number :"One",
        name : "Java" ,
        type : "Statically typed"
    } ,
    {
        number :"Two",
        name : "JavaScript" ,
        type : "Dynamically typed"
    },
    {
        number :"Three",
        name : "Golang" ,
        type : "Statically typed"
    }
];

function getLanguages(){
    setTimeout(() => {
        languagues.forEach((lang)=>{
            console.log(lang.name);
        });
    },500);
};

function addLang(lang){
    return new Promise(
        (resolve , reject)=>{
            setTimeout(()=> {
                languagues.push(lang);
                const error = false;
                if(!error){
                    resolve("Resolved");
                }else{
                    reject("Rejected");
                }  
          },1000);
        }
    );
};

addLang(
    {
        number :"Four",
        name : "Python" ,
        type : "Dynamically typed"
    } 
).then(getLanguages).catch(msg => console.log(msg));

