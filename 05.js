const getSalesDiscount = (price,tax,discount = 0) => {
    let diskon = discount / 100 * price;
    let priceAfterDiscount = price - diskon
    let pajak = tax / 100 * price
    let totalPayment = price + pajak

    if(isNaN(price) && isNaN(tax) && isNaN(discount)){
        return "Price, Tax & Discount harus dalam angka"
    } else if(isNaN(price)){
        return "Price harus dalam angka"
    } else if(isNaN(tax)){
        return "Pajak harus dalam angka"
    } else {
        return `Total Sales : Rp.${price} \nDiscount (${discount}%) : Rp.${diskon} \nPriceAfterDiscount : Rp.${priceAfterDiscount} \nPajak (${tax}%) : Rp.${pajak} \n--------------------------- \nTotalPayment : Rp.${totalPayment}`
    }
}

console.log(getSalesDiscount("a", 1,5));//Price harus dalam angka
console.log(getSalesDiscount(500, "pajak",5));//Pajak harus dalam angka
console.log(getSalesDiscount("harga", "pajak","discount"));//Price, Tax & Discount harus dalam angka
console.log(getSalesDiscount(4500, 10,5));
/**
 Total Sales : Rp.4500
 Discount (5%) : Rp.225
 PriceAfterDiscount : Rp.4275
 Pajak (10%) : Rp.427.5
 ----------------------------------
 TotalPayment : Rp.4702.5
*/