function validTime(time: string): boolean {
    const [hour, minute] = time.split(':').map(Number);
    return hour >= 0 && hour < 24 && minute >= 0 && minute < 60;
}

console.log(validTime('13:58'));
console.log(validTime('25:51'));
console.log(validTime('02:76'));

