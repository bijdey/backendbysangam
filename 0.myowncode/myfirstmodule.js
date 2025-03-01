function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function div(a, b) {
    if (b === 0) {
        throw new Error("Divide by 0 is not possible");
    }
    return a / b;
}

module.exports = {
    add,
    sub,
    div,
};
