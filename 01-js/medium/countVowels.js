/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    const str1 = str.toLowerCase().replace(/[^a-z0-9]/g,'').split('')
    let cnt = 0
    for (let i = 0; i < str1.length;i++) {
      if(str1[i] === 'a' || str1[i] === 'e' || str1[i] === 'i' || str1[i] === 'o' || str1[i] === 'u'){
          cnt ++;
        
      }
    }
    return cnt
    /*  const vowels = ['a', 'e', 'i', 'o', 'u'];
     let count = 0;
      //another method of solving
  // Convert the string to lowercase to perform a case-insensitive check
  const lowerCaseStr = str.toLowerCase();

  for (let i = 0; i < lowerCaseStr.length; i++) {
    // Check if each character is a vowel
    if (vowels.includes(lowerCaseStr[i])) {
      count++;
    }*/
}

module.exports = countVowels;