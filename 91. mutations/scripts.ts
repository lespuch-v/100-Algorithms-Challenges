function mutations(arr:string[]):boolean {
  let first:string = arr[0].toLowerCase();
  let second:string = arr[1].toLowerCase();
  
  for(let i =0 ; i < second.length; i++){
    if(first.indexOf(second[i])=== -1){ //
      return false
    }
  }
  return true

  
}
console.log(mutations(["hello", "hey"]))
console.log(mutations(["hello", "Hello"]))
console.log(mutations(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]))
console.log(mutations(["floor", "for"]))
