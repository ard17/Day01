const maxNumber = (num) => {
    return num.sort((a, b) => b - a)[0]
}

const numbers = [2, 42, 5, 304, 1, 13];
console.log(maxNumber(numbers)); // output 304