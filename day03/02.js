const range = (a, b) => {
    const arr = []
    if (!b) {
        b = a
        a = 1
    } 
    for (let i = a; i < b; i++) {
        arr.push(i)
    }
    return arr
}

console.log(range(9));//[1,2,3,4,5,6,7,8,9]
console.log(range(5,9)); //[5,6,7,8]