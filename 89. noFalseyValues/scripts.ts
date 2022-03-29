function bouncer(arr) {
    // remove all falsey values from an array.
    // use filter 
    // use boolean
    return arr.filter(Boolean)
  }
  
console.log(  bouncer([7, "ate", "", false, 9, 0, null, undefined, NaN, ""]) );