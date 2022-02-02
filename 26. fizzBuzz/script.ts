function fizzBuzz (num: number):number[]{
    const arr = []


    for(let i = 0; i < num;i++){
        if(i %3 === 0 && i %5 ===0){
            console.log(`FizzBuzz: ${i}`)
            arr.push(`FizzBuzz: ${i}`)
        }else if(i %3 === 0){
            console.log(`Fizz: ${i}`)
            arr.push(`Fizz: ${i}`)
        }else if (i %5 === 0){
            console.log(`Buzz: ${i}`)
            arr.push(`Buzz: ${i}`)
        }else{
            console.log(`${i}`)
            arr.push(i)
        }
    }
    return arr
}

console.table(fizzBuzz(100))