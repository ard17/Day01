import Product from './product.js';

const product1 = new Product(1, 'Samsung A1', 'HP', 2500000, 3);
const product2 = new Product(2, 'Dell Ultrabook', 'COMPUTER', 7850000, 2);
const product3 = new Product(3, 'Mesin Cuci LG', 'ELECTRONIC', 3500000, 1);
const product4 = new Product(4, 'Iphone 12', 'HP', 6000000, 2);
const product5 = new Product(5, 'Asus Laptop', 'COMPUTER', 6500000, 4);

let listProducts = [];
const addProduct = (product) => listProducts = [...listProducts, product];
addProduct(product1);
addProduct(product2);
addProduct(product3);
addProduct(product4);
addProduct(product5);

const findAllProduct = (listProducts) => listProducts;
console.log(findAllProduct(listProducts));

const findProductByCategory = (listProducts, category) => listProducts.filter( (a) => a.category === category );
console.log(findProductByCategory(listProducts, 'HP'));

const totalTagihan = listProducts.reduce((sum, a) => sum + a.subTotal, 0);
console.log(totalTagihan);

const totalTagihanDiskon = listProducts.reduce( (sum, a) => (a.jmlBeli > 1) ? sum + (a.subTotal - (a.subTotal * a.jmlBeli) / 100) : sum + a.subTotal,	0);
console.log(totalTagihanDiskon);

console.log();
