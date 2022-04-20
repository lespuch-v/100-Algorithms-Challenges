let alphabet = "abcdefghijklmnopqrstuvwxyz";

function newNumSystem(number: string): string[]{
    const numerals: string[] = []
    let startCharCount = 65
    let endCharCount = number.charCodeAt(0)

    while(startCharCount <= endCharCount){
        const numerl = `${String.fromCharCode(startCharCount)} + ${String.fromCharCode(endCharCount)}`
        numerals.push(numerl)
        startCharCount++
        endCharCount--
    }


    return numerals
}
console.log(newNumSystem("G"))