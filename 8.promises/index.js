function delayFn(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

console.log('Promise lecture start');

delayFn(2000).then(() => {
    console.log('first');
    return delayFn(2000);
}).then(() => {
    console.log('second');
    return delayFn(2000);
}).then(() => {
    console.log('third');
    return delayFn(2000);
}).then(() => {
    console.log('fourth');
});

function divideFn(a, b) {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            reject(new Error('Divide by zero is not possible'));
        } else {
            resolve(a / b);
        }
    });
}


divideFn(10, 4)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
