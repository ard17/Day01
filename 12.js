const getDays = (month,year) => {
    const d = new Date();
    return d.getFullYear(2021) + " " + d.getMonth(8)
    if(isNaN(month) && isNaN(year)){
        return "inputan bulan & tahun harus dalam integer"
    } else if(isNaN(month)){
        return "inputan bulan harus dalam integer"
    } else if(isNaN(year)){
        return "inputan tahun harus dalam integer"
    } else {
        return `This month has 29 days, 2000 adalah tahun kabisat`
    }
    return
}

// console.log(getDays("a",2021)); //inputan bulan harus dalam integer
// console.log(getDays("2","year")); //inputan tahun harus dalam integer
// console.log(getDays("m","year"));//inputan bulan & tahun harus dalam integer
// console.log(getDays(2,2000)); //This month has 29 days, 2000 adalah tahun kabisat
console.log(getDays(8,2021)); //This month has 31 hari