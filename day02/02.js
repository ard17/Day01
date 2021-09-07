const tagihanKomik = (tglPinjam, tglKembali, jmlKomik) => {
	const biayaSewa = 2500;
	const tagihan = jmlKomik * biayaSewa;
	const pinjam = tglPinjam.split('-');
	const kembali = tglKembali.split('-');
	const startDate = new Date(Number(pinjam[2]),Number(pinjam[0]),Number(pinjam[1]));
	const endDate = new Date(Number(kembali[2]),Number(kembali[0]),Number(kembali[1]));
	const selisihDate = endDate - startDate;
	const milliSecondPerDay = 1000 * 60 * 60 * 24;
	const totalHari = selisihDate / milliSecondPerDay;

	if(jmlKomik > 10) {
		return `Maximal komik yang dapat dipinjam adalah 10`
	}

	for (let i = 0; i < 3; i++) {
		if (isNaN(pinjam[i]) && isNaN(kembali[i])) {
			return `Tgl.Pinjam ${tglPinjam} & Tgl.Kembali ${tglKembali} not valid formated date`;
		}
		if (isNaN(pinjam[i])) {
			return `Tgl.Pinjam ${tglPinjam} not valid formated date`;
		}
		if (isNaN(kembali[i])) {
			return `Tgl.Kembali ${tglKembali} not valid formated date`;
		}
	}
	return `
    Total Hari = ${totalHari}
    Total Komik = ${jmlKomik} x Rp.${biayaSewa}
    ------------------------
    Total Tagihan = Rp.${tagihan}
    `;
};
console.log(tagihanKomik('09-03-20xx', '09-06-2021', 4)); //Tgl.Pinjam 09-03-20xx not valid formated date
console.log(tagihanKomik('09-03-2021', '09-mm-2021', 4)); //Tgl.Kembali 09-mm2021 not valid formated date
console.log(tagihanKomik('09-03-20xx', '09-mm-2021', 4)); //Tgl.Pinjam 09-03-20xx & Tgl.Kembali 09-mm-2021 not valid formated date
console.log(tagihanKomik('09-03-2021', '09-06-2021', 4));
/**
Total Hari = 3
Total Komik = 4 x 2500
------------------------
Total Tagihan =Rp.30000
*/
