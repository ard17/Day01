const findSum = (arr, hasil) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] + arr[i + 1] === hasil) {
			return `${arr[i]} & ${arr[i + 1]}, ${arr[i]}+${arr[i + 1]} = ${hasil}`;
		}
	}
};

console.log(findSum([1, 2, 3, 4, 5], 7)); // 4 & 5, 4+5 = 9
