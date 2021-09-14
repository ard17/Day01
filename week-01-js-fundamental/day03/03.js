let fruits = ["Jeruk", "Mangga", "Jambu", "Durian", "Rambutan"];

fruits.push("Anggur","Banana","Sirsak")
console.log(fruits);

fruits.pop()
console.log(fruits)

const j = fruits.indexOf("Jambu")
fruits.splice(j,1)
console.log(fruits)

fruits.splice(2,3)
console.log(fruits);

const b = fruits.indexOf("Banana")
fruits.splice(b,0,"rambutan","Bangkuang")
console.log(fruits)

const ba = fruits.indexOf("Banana")
fruits.splice(ba,1,"Nangka")
console.log(fruits);

const fruit = ['Jeruk', 'Mangga', 'Jambu', 'Durian','Rambutan', 'Jambu']
const vege = ['Kangkung', 'Bayam','Tomat', 'Bawang', 'Bayam']
const join = fruit.concat(vege)
console.log(join);

const reverse = join.reverse()
console.log(reverse)

const switchIndex = (arr,a,b) => {
    const idxa = arr.indexOf(a)
    const idxb = arr.indexOf(b)
    arr.splice(idxa,1,b)
    arr.splice(idxb,1,a)

    return arr
}
const newVege = fruit.concat(vege)
console.log(switchIndex(newVege,"Tomat","Jeruk"));