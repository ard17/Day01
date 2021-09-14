const maxWordLength = (str) => {
	const newStr = str.split(' ');
	let maxLength = '';
	for (let i = 0; i < newStr.length; i++) {
		if (maxLength.length < newStr[i].length) {
			maxLength = newStr[i];
		}
	}
	return maxLength;
};

console.log(maxWordLength('aku suka bootcamp sentul city')); //bootcamp
