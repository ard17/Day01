const payment = (tglBayar, tglJatuhTempo, cicilan) => {
    const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR'
    });
	const angsuran = 3500000;
	const bayar = tglBayar.split('/');
	const jatuhTempo = tglJatuhTempo.split('/');
	const startDate = new Date(tglBayar);
	const endDate = new Date(tglJatuhTempo);
	const selisihDate = startDate - endDate;
	const milliSecondPerDay = 1000 * 60 * 60 * 24;
	let jmlHariTerlambat = 0;
	let denda = 0;
	let totalBayar = cicilan;

    if (startDate > endDate) {
        jmlHariTerlambat = selisihDate / milliSecondPerDay;
        denda = (2 / 1000) * jmlHariTerlambat * angsuran;
        totalBayar = cicilan + denda;
    }
	if (bayar[0] === jatuhTempo[0] && bayar[1] < jatuhTempo[1] - 3) {
        return `Tagihan bulan ${jatuhTempo[0]} belum tersedia`;
	}
    if (cicilan < angsuran) {
        return `Angsuran anda kurang dari Rp 3.500.000,00. Silahkan isi sesuai angsuran`;
    }
    if (cicilan < totalBayar) {
        return `Anda telat membayar ${jmlHariTerlambat} hari, sehingga memiliki denda ${formatter.format(denda)}, total yang harus dibayar ${formatter.format(totalBayar)}`
    }

	return `
    --------------------------
    Tanggal Bayar : ${bayar[1]}/${bayar[0]}/${bayar[2]}
    Jatuh Tempo : ${jatuhTempo[1]}/${jatuhTempo[0]}/${jatuhTempo[2]}
    --------------------------
    Tagihan bulan ${bayar[0]},${bayar[2]} = ${formatter.format(angsuran)}
    Denda = ${formatter.format(denda)} (terlambat ${jmlHariTerlambat} hari)
    Total = ${formatter.format(cicilan)} (lunas)
    --------------------------
    Kwitansi ini sebagai alat bukti pembayaran
    `;
};

console.log(payment('09/30/2021', '09/27/2021', 50000)); //Angsuran anda kurang dari Rp 3.500.000,00. Silahkan isi sesuai angsuran
console.log(payment('09/22/2021', '09/27/2021', 3500000)); //Tagihan bulan 8 belum tersedia
console.log(payment('09/27/2021', '09/27/2021', 3500000));
/**
 --------------------------
 Tanggal Bayar : 27/9/2021
 Jatuh Tempo : 27/9/2021
 --------------------------
 Tagihan bulan 9,2021 = Rp.3500000
 Denda = Rp.0 (terlambat 0 hari)
 Total = Rp.3500000 (lunas)
 --------------------------
 Kwitansi ini sebagai alat bukti pembayaran
*/
