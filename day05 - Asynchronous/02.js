import Product from './02 - product.js';

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
// console.log(findAllProduct(listProducts));

const findProductByCategory = (listProducts, category) => listProducts.filter( (a) => a.category === category );
// console.log(findProductByCategory(listProducts, 'HP'));

const totalTagihan = listProducts.reduce((sum, a) => sum + a.subTotal, 0);
// console.log(totalTagihan);

const totalTagihanDiskon = listProducts.reduce( (sum, a) => (a.jmlBeli > 1) ? sum + (a.subTotal - (a.subTotal * a.jmlBeli) / 100) : sum + a.subTotal,	0);
// console.log(totalTagihanDiskon);


const addToCart = (a) => {return a.filter(x => x.price > 3000000)}
// console.log(addToCart(listProducts));
let orderNumber = 0
const date = new Date()
const month = date.getMonth() + 1; //months from 1-12
const day = date.getDate();
const year = date.getFullYear();

const createOrder = (num) => {return year + "/" + month + "/" + day + "#" + num} 
// console.log(createOrder(orderNumber));

const paymentOrder = (pay) => {
    return (pay === "BCA" || pay === "Shopee Pay" || pay === "OVO") ? pay : `Payment ${pay} tidak tersedia`
}

const displayTagihan = async () => {
    const [cart, order, pay] = await Promise.all([
        addToCart(listProducts),
        createOrder(orderNumber),
        paymentOrder("OVO")
    ])
    return [cart, order, pay]
}
displayTagihan().then(res => console.log(res))
// addToCart => add product yang price > 3jt by filter
// createOrder => format order 20210913#0001 (tahun/bulan/tanggal#nomorsequence)
// payment = [‘BCA’, ‘Shopee Pay’,’OVO’]
// displayTagihan