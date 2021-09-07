const isPermute = (str1, str2) => {
    const newStr1 = str1.split("").sort()
    const newStr2 = str2.split("").sort()

    return newStr1.join() === newStr2.join()
}

console.log(isPermute('aba', 'aab'))//true;
console.log(isPermute('aba', 'aaba'))//false;