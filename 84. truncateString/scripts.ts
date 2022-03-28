const truncateString =(str:string, num:number):string => {
    let newStr = str.slice(0,num)
    return newStr + '...'
}
console.log(truncateString("Ahhhhoooooj, jak se mas",3))