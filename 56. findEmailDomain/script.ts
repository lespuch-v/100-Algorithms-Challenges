export function findEmailDomain(address: string): string {
    const email = address.split("@")
    return email[Math.ceil(email.length / 2)]
}

console.log(findEmailDomain('prettyandsimple@example.com'));
console.log(findEmailDomain('<>[]:,;@\"!#$%&*+-/=?^_{}| ~.a\"@example.org'));
console.log(findEmailDomain('dvccnt@gmail.com'));
console.log(findEmailDomain('testvl@seznam.cz'));
