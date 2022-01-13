function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
    const yourweakest = yourLeft <= yourRight ? yourLeft : yourRight
    const yourstrongest = yourLeft >= yourRight ? yourLeft : yourRight
    const friendsweakest = friendsLeft <= friendsRight ? friendsLeft : friendsRight
    const friendstrongest = friendsLeft >= friendsRight ? friendsLeft : friendsRight

    return (yourstrongest === friendstrongest && yourweakest === friendsweakest)
}

console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 9))