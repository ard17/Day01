const matchingDate = (dates, year) => {
    const searchDate = dates.find((dates) => dates.getFullYear() === year)
    return searchDate
}

const dates = [new Date(2021, 10, 20), new Date(2019, 3, 12),new Date(2020, 5, 23), new Date(2022, 3, 18)];
console.log(matchingDate(dates,2020));//Sun Apr 12 2020 00:00:00 GMT+0700 (Western Indonesia Time)