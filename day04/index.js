import Product from './product.js';

const product1 = new Product(1, 'Samsung A1', 'HP', 2500000, 3, 7500000);
const product2 = new Product(2, 'Dell Ultrabook', 'COMPUTER', 7850000, 2, 15700000);
const product3 = new Product(3, 'Mesin Cuci LG', 'ELECTRONIC', 3500000, 1, 3500000);
const product4 = new Product(4, 'Iphone 12', 'HP', 6000000, 2, 12000000);
const product5 = new Product(5, 'Asus Laptop', 'COMPUTER', 6500000, 4, 26000000);

const listProducts = []
const addProduct = (product) => {
    // const listProduct = []
    // listProduct.push({...product})
    return {...product}
}

function findAllProduct(listProducts) {return listProducts}
//     // const allProduct = [] 
//     // allProduct.pus
// 	return listProduct;
// }


function findProductByCategory(listProducts, category) {
    const product = listProducts.filter((a) => a.category === category);
	return product;
}


function totalProduct(listProducts) {
    const totalHarga = listProducts.reduce((sum, a) => sum + a.subTotal, 0);
	return totalHarga;
}


function totalTagihan(listProducts) {
    listProducts.forEach( (product, index) => listProducts[index].subTotal = listProducts[index].subTotal - (product.jumlahBeli -1) / 100 * product.subTotal)
    const afterDiscount =  listProducts.reduce((sum, a) => sum + a.subTotal, 0);
	return afterDiscount;
}


listProducts.push(addProduct(product1))
listProducts.push(addProduct(product2))
listProducts.push(addProduct(product3))
listProducts.push(addProduct(product4))
listProducts.push(addProduct(product5))
console.log("nomer 3: ", findAllProduct(listProducts));
console.log("nomer 4: ", findProductByCategory(listProducts, 'HP'))
console.log('nomer 5: ', totalProduct(listProducts));
console.log("nomer 6: ", totalTagihan(listProducts));
console.log();