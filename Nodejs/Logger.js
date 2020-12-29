const Emitter = require("events");
const Uuid = require("uuid");

class Logger extends Emitter{
    logs(msg){
        this.emit("Message" , {
            id: Uuid.v4() ,
            message : msg 
        })
    }
}
module.exports=Logger;


// const Person = require("./Node");

// const person = new Person("Prateek" , "20");

// person.greeting();


// const Logger = require("./Logger");

// const log = new Logger();


// /*on basically sets up a function for message(which acts as a key)
// Now we call that callback by   */
// log.on("Message" , (data)=> console.log("Event ->" , data))


// log.logs("hello")