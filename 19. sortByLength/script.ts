function sortByLength (array:string[]):string[] {
    // Return an array containing the same strings, ordered from shortest to longest
    const newArr = array.sort(function(a, b){
      return a.length - b.length
    })
    return newArr
  };


  console.log(sortByLength(["ahoj", "jak", "se", "mas"]))