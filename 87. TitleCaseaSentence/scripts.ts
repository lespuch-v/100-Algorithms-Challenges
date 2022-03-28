function titleCase(str: string) {
    const finalStr = str.toLowerCase().split(" ")
    const finalArr = []

    finalStr.forEach(word => {
        finalArr.push(word[0].toUpperCase() + word.slice(1))
    });
    return finalArr.join(" ")
}
  
console.log(titleCase("I'm a little tea pot"))


