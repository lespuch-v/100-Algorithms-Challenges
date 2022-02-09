function isCaseInsensitivePalindrome(inputString: string): boolean {
  const arr = [];
  const reversedArr = [];

  for (let i = 0; i < inputString.length; i++) {
    arr.push(inputString[i].toLowerCase());
  }
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedArr.push(inputString[i].toLowerCase());
  }
  let x = JSON.stringify(arr) == JSON.stringify(reversedArr);

  return x;
}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));
console.log(isCaseInsensitivePalindrome('Hannah'));

// Professional solution
function isPalindrome(input: string):boolean{
    const normalString = input.toLowerCase()
    const reversedString = normalString.toLowerCase().split("").reverse().join("")

    return normalString == reversedString ? true : false
}

console.log(isPalindrome("hannah"))