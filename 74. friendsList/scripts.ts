const friend = ["Ryan", "Kieran", "Jason", "Yous"]

const friendsList = (str: string[]): string[] => {
    return str.filter(item => item.length === 4)
} 
console.log(friendsList(friend))