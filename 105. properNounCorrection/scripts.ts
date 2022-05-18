function properNounCorrection(noun: string): string {
    const firstLetter = noun[0].toUpperCase();
    const restOfWord = noun.slice(1).toLowerCase();
    return `${firstLetter}${restOfWord}`;
}

console.log(properNounCorrection('pARiS'));
console.log(properNounCorrection('John'));