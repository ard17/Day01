const totalGaji = (gaji1, gaji2, gaji3) => {
	const pajak1 = (2 / 100) * gaji1 + gaji1;
	const pajak2 = (5 / 100) * gaji2 + gaji2;
	const pajak3 = (10 / 100) * gaji3 + gaji3;
	const total = pajak1 + pajak2 + pajak3;

	return `
    Total gaji yang harus dibayar :
    Emp1 : Rp.${gaji1} + Pajak(2%)=Rp.${pajak1}
    Emp1 : Rp.${gaji2} + Pajak(5%)=Rp.${pajak2}
    Emp1 : Rp.${gaji3} + Pajak(10%)=Rp.${pajak3}
    Total : Rp.${total}
    `;
};

console.log(totalGaji(500, 2000, 12000));
//  Total gaji yang harus dibayar :
//  Emp1 : Rp.500 + Pajak(2%)=Rp.510
//  Emp1 : Rp.2000 + Pajak(5%)=Rp.2100
//  Emp1 : Rp.12000 + Pajak(10%)=Rp.13200
//  Total : Rp.15810
