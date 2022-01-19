

console.log(makeFlat(["one", ["two", "three"], ["four", "five"]]));

function arrayPreviousLess(items) {
  const lettThanList = [];
  for (let i = items.length - 1; i >= 0; i--) {
    for(let j = i; j >=0; j--){
        if(items[i]> items[j]){
            lettThanList.unshift(items[j])
        }else if(j == 0){
            lettThanList.unshift(-1)
        }
    }
  }

  return lettThanList;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
