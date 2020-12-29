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

function addLang(lang , callback){
    setTimeout(()=> {
          languagues.push(lang)
          callback();
    },1000)
};

addLang(
    {
        number :"Four",
        name : "Python" ,
        type : "Dynamically typed"
    } ,
    getLanguages
);

