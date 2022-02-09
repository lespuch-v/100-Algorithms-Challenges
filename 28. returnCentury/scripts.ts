function centuryFromYear(year: number): number {
    let justYear = Math.floor(year/100)
    return justYear
}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));
console.log(centuryFromYear(2015));