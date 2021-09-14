const students = ["asep","budi","charlie","budi", "budi","jeni","asep"];
let out = {}
const duplicateElement = (students) => {
    let out = {}
    // students.reduce((val, el) => out[el] = (out[el] || 0) +1, 0) 
    // return out
    students.forEach((x) => out[x] = (out[x] || 0) + 1);
    return out
}
// out["asep"] = 1
// out["asep"] = (out["asep"] || 0)
// console.log(out);
console.log(duplicateElement(students))