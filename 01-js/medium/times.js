/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    let a = 0
    const before = new Date()
    const beforetime = before.getTime()
    for (let i = 0; i < n; i++) {
        a  = a + i;
        
    }
    const after = new Date()
    const aftertime = after.getTime()

    const ans = aftertime - beforetime
    return ans
}

const res1 = calculateTime(100)
const res2 = calculateTime(100000)
const res3 = calculateTime(1000000000)
console.log(res1);
console.log(res2);
console.log(res3);