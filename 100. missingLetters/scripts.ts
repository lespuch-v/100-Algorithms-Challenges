export function missingLetters(str: string): string {
   const allLetters = 'abcdefghijklmnopqrstuvwxyz'.split("");  // split string into array of letters // 
    const strLetters = str.split(""); 

    // compare allLetters to strLetters and return missing letters
    for(let i = 0; i < allLetters.length; i++) { // loop through all letters in allLetters array 
        if(!strLetters.includes(allLetters[i])) { // if letter is not in strLetters array 
            return allLetters[i]; // return missing letter
        }
    }
   
}

console.log(missingLetters("bce"));
console.log(missingLetters("abce"));
console.log(missingLetters("abcdefghjklmno"));
console.log(missingLetters("abcdefghijklmnopqrstuvwxyz"));