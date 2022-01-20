const test = (obj, source) => 
    Object.keys(source).every((key) => obj.hasOwnProperty(key) && obj[key] === source[key])



console.log(test({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true }))
console.log(test({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true }))
console.log(test({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true }))

