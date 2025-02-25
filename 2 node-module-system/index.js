const firstmodule = require('./first-module');

console.log(firstmodule.add(3, 5));

try {
    console.log('Trying to divide by zero');
    let result = firstmodule.div(0, 10); // Fixed: Now actually triggers the error
    console.log(result);
} catch (error) {
    console.log('Caught an error:', error.message);
}

console.log(firstmodule.add(Infinity, 3)); // Explicitly using Infinity to make it clearer


//module wrapper
(
    function(exports, require, module, __filename, __dirname){
        //your module code goes here
    }
)