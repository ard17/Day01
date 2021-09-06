const calculateDistance = (a, t) => {
    if (isNaN(a) || isNaN(t)){
        return "Input must an number"
    } else if (Number(a) < 0 || Number(t) < 0) {
        return "Accelaration or time must be >= 0"
    } else {
        return `Jarak yang ditempuh adalah ${(1/2) * a * Math.pow(t, 2)} meter/s`
    }
};

console.log(calculateDistance("a","t"));//input must an number
console.log(calculateDistance(-1,9)); //Accelaration or time must be >= 0
console.log(calculateDistance(50,60)); //Jarak yang ditempuh adalah 90000 meter/s