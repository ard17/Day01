const getPeriodTimes = (seconds) => {
	let hari, jam, menit, detik;
	if (isNaN(seconds)) {
		return `${seconds} is not number`;
	} else {
		hari = parseInt(seconds / (24 * 60 * 60));
		sisa = seconds % (24 * 60 * 60);

		jam = parseInt(sisa / (60 * 60));
		sisa = sisa % (60 * 60);

		menit = parseInt(sisa / 60);
		detik = sisa % 60;
		return `${hari} hari ${jam} jam ${menit} menit ${detik} detik`;
	}
};

console.log(getPeriodTimes('700005A')); //700005A is not number
console.log(getPeriodTimes('700005')); //8 hari 2 jam 26 menit 45 detik
