const data = [
    "car",
    "car",
    "truck",
    "truck",
    "bike",
    "walk",
    "car",
    "van",
    "bike",
    "walk",
    "car",
    "van",
    "car",
    "truck",
    "ahoj",
  ];
  
  function count_duplicate(item: string[]): any {
    let count = {};
  
    for (let i = 0; i < item.length; i++) {
      if (count[item[i]]) {
        count[item[i]] += 1;
      } else {
        count[item[i]] = 1;
      }
    }
    for (let prop in count) {
      if (count[prop] >= 2) {
        console.log(prop + " counted: " + count[prop] + " times.");
      }
    }
    return count;
  }
  
  console.log(count_duplicate(data));
  