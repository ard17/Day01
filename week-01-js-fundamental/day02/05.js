const segitiga1 = (jml) => {
	let k = jml;
	for (let j = 0; j < jml; j++) {
		let out = '';
		for (let i = 1; i <= k; i++) {
			out = out + ' ' + i;
		}
		k--;
		console.log(out);
	}
};
segitiga1(6);

const segitiga2 = (jml) => {
	let k = jml;
	for (let j = 1; j <= jml; j++) {
		let out = '';
		for (let i = k; i >= 1; i--) {
			out = out + ' ' + i;
		}
		k--;
		console.log(out);
	}
};
segitiga2(5);
