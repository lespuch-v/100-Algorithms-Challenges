//Given a string, output its longest prefix which contains only digits.
//For inputString="123aa1", the output should be longestDigitsPrefix(inputString) = "123"


function longestDigitsPrefix2(inputString: string): string {
    let result = '';
    for (let i = 0; i < inputString.length; i++) { 
        if (!isNaN(Number(inputString[i]))) { // if inputString[i] is a number
            //if the character is a number
            result += inputString[i]; // add it to the result
        } else {
            //if the character is not a number
            break; //if the character is not a number, break out of the loop
        }
    }
    return result; // return the result
}

console.log(longestDigitsPrefix2('1245643aa1'));