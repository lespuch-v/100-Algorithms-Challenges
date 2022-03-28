// create a function that repeats a string n times.
const repeatRepeatedString = (str, n) => {
    return str.repeat(n);
}

console.log(repeatRepeatedString("abc", 3));


const repeatStringNumTimes = (str, num) => {
  let result = '';
  for (let i = 0; i < num; i++) {
    result += str;
  }
  return result;
}
console.log(repeatStringNumTimes('abc', 3));
