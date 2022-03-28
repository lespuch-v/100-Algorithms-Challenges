
// create a function that takes a string and target string and returns true if the target is at the end of the string, and false otherwise.
function confirmEnding(str, target) {
    console.log(-target.length)
  
  return str.substr(-target.length) === target;
}
console.log(confirmEnding("Bastian", "an"));


const confirmEnding2 = (str, target) => {
    return str.endsWith(target);
}

console.log(confirmEnding2("Bastian", "n"))
