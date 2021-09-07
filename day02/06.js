const showPrimeNumber = (number) => {
    
    if (number <= 1) {
	return false;
    }

    let prime = ""
    let count = 0
    
    for (let j = 2; j <= number; j++) {
        if(isPrimeNumber(j)){
            prime = count % 5 === 0 ? prime = prime + "\n" + j : prime = prime + "\t" + j
            count++
        }
	} 
   
    return prime
}

function isPrimeNumber(n){
    if (n <= 1){
        return false;
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0){
            return false;
        }
    }
    
    return true;
}

console.log(showPrimeNumber(100));