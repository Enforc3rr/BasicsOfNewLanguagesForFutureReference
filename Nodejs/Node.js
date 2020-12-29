class Person {
    constructor(name,age){
        this.name=name ;
        this.age=age;
    }
    greeting(){
        console.log(`Hello ${this.name} , You're ${this.age}`);
    }
}

 console.log(__dirname);

module.exports=Person;