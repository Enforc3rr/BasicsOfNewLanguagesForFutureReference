let value = 10 ;
console.log(value);

const anotherValue = 10 ;
console.log(anotherValue);
/*Cannot Re-assing value to const.
anotherValue = 20 ;
*/

const ud = undefined;
console.log(typeof ud);

const nl = null;
console.log(typeof nl);

const stringTest = `Value is ${value}`;
console.log(typeof stringTest);
console.log(stringTest);

const s = "Hello";
console.log(s.split(""));

//Object Literals
const details = {
    fName : "Prateek" ,
    lName : "Kumar" ,
    age : 19 ,
    langKnown : ["java" , "Golang" , "Js"] ,
    address : {
        area : "Chandpur",
        city : "Varanasi" 
    }
}

const {fName , address : {city}} = details;
console.log("First name " + fName);
console.log(city);

console.log(details.langKnown[1]);

console.log(details);

const todos = [
    {
        number : 1 ,
        work : "eating" ,
        isCompleted : true
    },
    {
        number : 2 ,
        work : "drinking" ,
        isCompleted : true
    },
    {
        number : 1 ,
        work : "sleeping" ,
        isCompleted : false
    }
];

console.log(todos[1].work);
console.log(JSON.stringify(todos));

for (let i = 0 ; i < todos.length ; i++){
    console.log(todos[i].work);
}
for(let workDone of todos){
    console.log(workDone.isCompleted);
}

const func1 = todos.filter(function(todo){
    return todo.number === 2;
}).map(function(todo){
    return todo.work;
});

console.log(func1);
//Arrow Function
const func2 = (n1 , n2) => n1+n2 ;
console.log(func2(2,3));

//OOP
class Name{
    constructor(firstName , lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

//instansiate 

const nm  = new Name("Prateek" , "Kumar");

console.log(nm);

console.log(nm.getFullName());


//A-Sync Code ->

setTimeout(() => {
    console.log("Timer is done")
},5000);