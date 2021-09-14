const citiesSlice = (cityArr, cityBetween) => {
    const indexCity = cityArr.indexOf(cityBetween)
    const citySlice = [...cityArr.slice(0,indexCity),...cityArr.slice(indexCity+1)]
    return citySlice
}

const cities = ["merak", "tangerang", "jakarta", "bogor", "cianjur", "cimahi", "bandung"];
console.log(citiesSlice(cities,"bogor")); //['merak', 'tangerang', 'jakarta', 'cianjur', 'cimahi', 'bandung']
console.log(citiesSlice(cities,"jakarta"));//['merak', 'tangerang', 'bogor', 'cianjur', 'cimahi', 'bandung’]