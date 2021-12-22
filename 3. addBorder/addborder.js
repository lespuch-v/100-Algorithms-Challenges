let picture = ["abc",
"ded"]

let wall = picture[0].length + 2
let sideBorder = picture[picture.length -1].length +1
const star = "*"
console.log(sideBorder)


for(let i = 0; i < picture[0].length; i++){
    picture = 
    `
    ${star.repeat(wall)}
    ${star}${picture[i].concat(star)}
    ${star}${picture[i].concat(star)}
    ${star.repeat(wall)}
    `
}
console.log(picture)

