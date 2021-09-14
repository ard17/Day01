const isPalindrome = (str) => {
	const newStr = str.toLowerCase();

	for (let i = 0; i < str.length / 2; i++) {
		if (newStr[i] !== newStr[str.length - 1 - i]) {
			return false;
		}
	}
	return true;
};

console.log(isPalindrome('kasur ini rUsak')); //true
