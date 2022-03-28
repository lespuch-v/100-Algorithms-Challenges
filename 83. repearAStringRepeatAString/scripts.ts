// create a function that repeats a string n times.
// language: typescript
// no .repeat() method in typescript
function repeatAString(str:string, n:number):string {
    let result = ""
    for(let i = 0; i < n; i++) {
        result += str
    }
    return result
}


console.log(repeatAString("hello", 3))