let digits = 29
const strDigits = digits.toString()
const digitsArr = strDigits.split("")
let counter = 0

for(let i = 0; i < digitsArr.length; i++){
    counter += parseInt(digitsArr[i])
    console.log(digitsArr[i])
}
console.log(counter)