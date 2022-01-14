function arrayChange(values: number[]): number {
    let isOdd = true

    while(values.length !== 1){
        values = sumProduct(values, isOdd)
        isOdd != isOdd
    }

    return values[0]
}


function sumProduct(num: number[], isOdd: boolean): number[]{
    const sumProduct: number [] = []

    if(isOdd){
        for(let i = 0; i < num.length; i++){
            sumProduct.push(num[i] = num[i + 1])
        }
    }else{
        for(let i = 0; i < num.length; i++){
            sumProduct.push(num[i] * num[i + 1])
        }
    }
    return sumProduct
}

console.log(arrayChange([1, 2, 3, 4, 5, 6, 7, 8]));
