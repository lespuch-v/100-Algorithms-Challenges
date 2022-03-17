export function integerToStringOfFixedWidth(
  number: number,
  width: number
): string {
  let stgingiphyNum = number.toString();
  const numberWidth = stgingiphyNum.length;

  if (numberWidth < width) {
    const widthDif = width - numberWidth;
    let padStart = '';

    for (let i = 0; i < widthDif; i++) {
      padStart = padStart.concat('0');
    }
    return padStart.concat(stgingiphyNum);
  }
  if(numberWidth < width){
      const widthDif = width - numberWidth
      return stgingiphyNum.substring(widthDif, stgingiphyNum.length)
  }

  return stgingiphyNum;
}

console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 5));
