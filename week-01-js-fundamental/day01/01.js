const getAreaCircle = (radius) => {
	if (isNaN(radius)) {
		return `Inputan harus dalam angka`;
	} else if (Number(radius) <= 0) {
		return `radius ${radius} <= 0, try higher`;
	} else {
		return Math.PI * radius * radius;
	}
};
console.log(getAreaCircle('-1')); //return radius -1 <= 0, try higher
console.log(getAreaCircle('a')); //return Inputan harus dalam angka
console.log(getAreaCircle(5)); //retun 78.53975
