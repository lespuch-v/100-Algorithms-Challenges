export function firstDuplicate(a: number[]): number {
  const arr: number[] = [];
  let num;

  for (let i = 0; i < a.length; i++) {
      if(!arr.includes(a[i])){
          arr.push(a[i])
        }else{
          num = a[i-1]
      }
  }


  return num > 0 ? num : -1;
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate([2, 4, 3, 5, 1]));
