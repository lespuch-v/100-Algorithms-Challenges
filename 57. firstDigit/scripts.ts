export function firstDigit(inputString: string): string[] {
    const myString = inputString.split("")
    const numbs = []
    let val = 10

    for(let i = 0; i < myString.length; i++){
        if(parseInt(myString[i]))
        numbs.push(myString[i])
    }
    return numbs
}

console.log(firstDigit('var_1__Int'));
console.log(firstDigit('q2q-q'));
console.log(firstDigit('0ss0'));
