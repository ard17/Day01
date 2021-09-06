const sumDigit = (n) => {
    const gantiTypeData = String(n)
    
    if (isNaN(n)){
        return "a123 is not number, try again..."
    } else if(n > 10000) {
        return `${n} harus lebih kecil dari 10000`
    } else {
        let out = 0
        for(let i = 0; i < gantiTypeData.length; i++){
            out + Number(gantiTypeData[i])
        }
        return out
    }
}

console.log(sumDigit(1234)); //10
// console.log(sumDigit("1234"));//10
// console.log(sumDigit(12345));//12345 harus lebih kecil dari 10000
// console.log(sumDigit("a123"));//a123 is not number, try again...