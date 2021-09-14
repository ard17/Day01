const getProsentase = (income1,income2) => {
    const total = (income2 - income1) / income1 * 100

    if (isNaN(income1) || isNaN(income2)){
        return `${income1} or ${income2} harus dalam angka`
    } else if (income1 < income2) {
        return `Total kenaikan income ${total}%`
    } else {
        return `Total penurunan income ${Math.ceil(total)}%`
    }
    
}

console.log(getProsentase("abc","bca"));//abc or bca harus dalam angka
console.log(getProsentase(600000.00,750000.00));//Total kenaikan income 25%
console.log(getProsentase(750000.00,650000.00));//Total penurunan income -14%