// Write a JavaScript program to check the length of the string

function lengthOfString(string) {
    let length = 0;
    let i = 0;
    while (string[length] != undefined) {
        length++;
    }

    return length;
}

console.log(lengthOfString("Reactjs"));
console.log(lengthOfString("Bestenlist"));
console.log(lengthOfString("30 days React.js Internship"));
