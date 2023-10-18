function isPalindrome(word) {
  // Write your algorithm here
  
    word = word.toLowerCase();
   
    // Reverse the word
    let reversedWord = word.split('').reverse().join('');
   
    // Check if the reversed word is equal to the original word
    if (word === reversedWord) {
       return true;
    } else {
       return false;
    }
   }
  


/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  In this solution, the word "racecar" is a palindrome, so the function returns `true`. The word "hello" is not a palindrome, so the function returns `false`.
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
