function enc(str: string): object {
    const arr = [];
    let count = {};
  
    for (let i = 0; i < str.length; i++) {
      arr.push(str[i]);
    }
    console.log(arr);
    arr.forEach(function (x) {
      count[x] = (count[x] || 0) + 1;
    });
  
    return count;
  }
  
  console.log(enc("ahoj, jaks mas"));
  