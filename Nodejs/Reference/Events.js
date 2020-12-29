const EventEmitter = require("events");

//Emitter class

class MyEmitter extends EventEmitter {

}

//Init Object
const myEmitter = new MyEmitter();

myEmitter.on("event" , () => console.log("Event Called"));

//Calling Event

myEmitter.emit("event")
