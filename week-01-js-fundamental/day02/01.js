const strToDate = (input) => {
	const tgl = input.split('/');
	const date = new Date(input);

	if (isNaN(tgl[0]) || isNaN(tgl[1]) || isNaN(tgl[2])) {
		return `${input} bad format date`;
	}

	return date;
};
console.log(strToDate('12/30/2021')); //Thu Dec 30 2021 00:00:00 GMT+0700 (Western Indonesia Time)
console.log(strToDate('12/aa/bb')); //12/aa/bb bad format date
