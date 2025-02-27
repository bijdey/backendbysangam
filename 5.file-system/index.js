const fs = require('fs');
const path = require('path');

// sync way
//create a folder in same directory
const dataFolder = path.join(__dirname, 'data');

if(!fs.existsSync(dataFolder)) {
    fs.mkdirSync(dataFolder);
    console.log('Data folder created');
} else {
    console.log('Data folder already exists');
}
// create a file in the folder and write some data
const  filepath =path.join(dataFolder, 'data.txt');
fs.writeFileSync(filepath, 'Hello world form node js ');
console.log('Data written to file');

//read content from the file

const readcontent= fs.readFileSync(filepath, 'utf-8');
console.log('File content:', readcontent);

fs.appendFileSync(filepath, '\nadded new line');
console.log('Data appended to file');

const readcontent2= fs.readFileSync(filepath, 'utf-8');
console.log('File content:', readcontent2);



//async way

