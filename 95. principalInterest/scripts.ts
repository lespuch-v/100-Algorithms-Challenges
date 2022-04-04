function calculateYears(principal:number, interest:number, tax:number, desired:number):number {
    let years = 0

    while(principal < desired){
        principal += principal * interest * (1 - tax)
        years++

    }
    return years

}
console.log(calculateYears(1000, 0.05, 0.18, 1100));
console.log(calculateYears(1000, 0.01625, 0.18, 1200));
console.log(calculateYears(1000, 0.05, 0.18, 1000));