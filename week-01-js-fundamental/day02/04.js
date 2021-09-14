const howManyKabisat = (tahun1, tahun2) => {
    let kabisat = 0;
	let jmlTahun = '';
	for (let i = tahun1; i <= tahun2; i++) {
		if (i % 400 === 0 || (i % 4 === 0 && i % 100 !== 0)) {
			kabisat = kabisat + 1;
			jmlTahun = jmlTahun + ' ' + i;
		}
	}
	return `Total tahun kabisat : ${kabisat} tahun = ${jmlTahun}`;
};

console.log(howManyKabisat(1997, 2021));
// Total tahun kabisat : 6 tahun = 2000 2004 2008 2012 2016 2020
