const isCharsUnique = (str) => {
	for (let i = 0; i < str.length; i++) {
		for (let j = i + 1; j < str.length; j++) {
			if (str[i] === str[j]) {
				return `false, karena ${str[i]} duplikat`;
			}
		}
	}
	return 'true';
};

console.log(isCharsUnique('abcdefg')); //true
console.log(isCharsUnique('abcdefge')); //false, karena a duplikat
