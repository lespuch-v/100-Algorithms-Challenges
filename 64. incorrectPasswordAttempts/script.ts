export function incorrectPasscodeAttempts(
  passcode: string,
  attempts: string[]
): boolean {
    let isLocked = true
    let counter = 0
    if(passcode.length === 4){
        for(let i = 0; i < attempts.length;i++){
            counter = attempts[i] === passcode ? 0 : counter++
            if(counter === 10){
                return true
            }
        }return false
    }

}

console.log(incorrectPasscodeAttempts('1111', ["1111", "4444", "9999", "3333", "8888", "2222", "7777", "0000", "6666", "7285", "5555", "1111"]));
