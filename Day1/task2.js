// Write a JavaScript program to check two given numbers and return true if
// one of the number is 50 or if their sum is 50

function task2(a, b) {
    if (a == 50 || b == 50 || a + b == 50) {
        return true;
    } else {
        return false;
    }
}

console.log(task2(20, 20));
console.log(task2(50, 10));
console.log(task2(20, 50));
console.log(task2(40, 10));
