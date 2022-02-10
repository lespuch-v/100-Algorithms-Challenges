function checkPalindrome(inputString: string): boolean {
  const normalStr = inputString.split('').join('');
  const reversedStr = normalStr.split('').reverse().join('');

  return normalStr == reversedStr ? true : false;
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('hjkljkl;'));
console.log(checkPalindrome('a'));
console.log(checkPalindrome('hannah'));
