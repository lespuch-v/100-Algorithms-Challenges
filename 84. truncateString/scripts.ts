const truncateString =(str:string, num:number):string => {
    if(str.length <= num) {
        return str
    } else {
        return str.slice(0, num) + "..."
    }
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))