const countValley = (str) => {
	const newArr = str.split('');
	let step = 0;
	let count = 0;

	for (let i = 0; i < newArr.length; i++) {
		if (newArr[i] === 'U') step++;
		if (newArr[i] === 'D') step--;
		if (step === 0 && newArr[i] === 'U') count++;
	}
	return `${count} gunung`;
};

console.log(countValley('UDDDUDUU'));
