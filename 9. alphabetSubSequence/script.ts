function myFunk(s: string): boolean{
    const chars: string[] = s.split("")
    const charValues: number[] = []

    chars.forEach((char: string) => {
        charValues.push(char.charCodeAt(0))
    })
    console.log(new Set(charValues))
    if(new Set(charValues).size !== charValues.length){
        return false
    }

    return true
}

console.log(myFunk("fdaskl"))
console.log(myFunk("effg"))
console.log(myFunk("ace"))