export default class Product {
	constructor(prodId, prodName, category, price = 0, jmlBeli = 1) {
		this.prodId = prodId;
		this.prodName = prodName;
		this.category = category;
		this.price = price;
		this.jmlBeli = jmlBeli;
		this.subTotal = this.price * this.jmlBeli;
	}
}
