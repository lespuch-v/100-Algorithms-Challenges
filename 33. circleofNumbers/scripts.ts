function circleOfNumbers(n: number, firstNumber: number): number {
  const numArr = [];
  const halfPoint = n/2
  
  for(let i = 0; i < n; i++){
      numArr.push(i)
  }
  if(firstNumber < halfPoint){
      return numArr[firstNumber + halfPoint]
  }
  return numArr[firstNumber - halfPoint]
}

console.log(circleOfNumbers(10, 2));
console.log(circleOfNumbers(10, 3));
