const getSalesTax = (price,tax) => {
    if (isNaN(price) && isNaN(tax)){
        return "Price & Pajak harus dalam angka"
    } else if (isNaN(price)){
        return "Price harus dalam angka"
    } else if(isNaN(tax)){
        return "Pajak harus dalam angka"
    } else {
        return `Total Sales : Rp.${price} \nPajak : ${tax / 100} \nTotal Harga + Pajak : Rp.${price + (price * (tax / 100))}`
    }
};

console.log(getSalesTax("a", 1));//Price harus dalam angka
console.log(getSalesTax(500, "pajak"));//Price & Pajak harus dalam angka
console.log(getSalesTax("harga", "pajak"));//Pajak harus dalam angka
console.log(getSalesTax(4500, 5)); //Contoh output dibawah
// Total Sales : Rp.4500
// Pajak : 0.5
// TotalHarga+Pajak : Rp.4505