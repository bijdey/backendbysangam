const EventEmitter = require('events');

class MyCustomEmitter extends EventEmitter {
    constructor() {
        super();
        this.greeting = 'Hello';  
    }

    greet(name) {
        this.emit('greeting', `${this.greeting}, ${name}!`);  // Added exclamation
    }
}

const customEmitter = new MyCustomEmitter();  
customEmitter.on('greeting', (input) => {
    console.log(`Greeting event: ${input}`);  
});

customEmitter.greet('Bijay');  