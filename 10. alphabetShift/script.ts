const inputString = "crazy"
const inputString1 = "hello"
const inputString2 = "wordl"

function alphabetShift(text: string):any{
    const valueArr = []
    const letterArr = []
    
    console.log()

    for(let i = 0; i < text.length; i++){
        let x = text[i]
        let y = x.charCodeAt(0)
        valueArr.push(y+1)
    }

    for(let i = 0; i < valueArr.length; i++){
        let z = String.fromCharCode(valueArr[i])
        letterArr.push(z)
    }

    return letterArr.join("")
}

console.log(alphabetShift(inputString))
console.log(alphabetShift(inputString1))
console.log(alphabetShift(inputString2))