
const EventEmitter = require('events'); 


const myFirstEmitter = new EventEmitter();


myFirstEmitter.on('greet', (name) => {
    console.log(`Hello ${name}`);  
});

// Emit the event
myFirstEmitter.emit('greet', 'bijay');