const fs = require('fs');
const path = require('path');

// sync way of writing code
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





//async way of writing code

const asyncFilePath =path.join(dataFolder, 'asyncdata.txt');
fs.writeFile(asyncFilePath, 'Hello world from Node.js from async', (err) => {
    if (err) {
        console.log('Error:', err);
    } else {
        console.log('Data written to file');

        fs.readFile(asyncFilePath, 'utf-8', (err, data) => {
            if (err) {
                console.log('Error:', err);
            } else {
                console.log('Async file content:', data);

                fs.appendFile(asyncFilePath, '\nAdded new line', (err) => {
                    if (err) {
                        console.log('Error:', err);
                    } else {
                        console.log('New line added to asyncfile');

                        // Read the file again to display the updated content
                        fs.readFile(asyncFilePath, 'utf-8', (err, updatedData) => {
                            if (err) {
                                console.log('Error:', err);
                            } else {
                                console.log('Async file with added content:', updatedData);
                            }
                        });
                    }
                });
            }
        });
    }
});


