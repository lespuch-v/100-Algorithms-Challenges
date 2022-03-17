export function lateRide(n: number): any {
  const hours = Math.floor(n / 60);
  const minutes = n % 60;
  const time = hours
    .toString()
    .concat(minutes.toString())
    .split('')
    .map((chars) => {
      chars;
    })
    return time
}

console.log(lateRide(240));
console.log(lateRide(808));
