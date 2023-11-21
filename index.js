function isPalindrome(word) {
  let revWord = word.split("").reverse().join("");
  if(revWord === word){
    return true
  }
  else{
    return false
  }
  // Write your algorithm here
  // 1)Take in the word
  // 2)reverse the word 
  // 3)determin if the word reversed is the same 
  // 4)then return true or false

}

/* 
  Add your pseudocode here
  write the function isPalindrome for (word){
    create reverse word variable by taking word and split it("") reverse it() then re join it("")
    compare reverse word ==== word 
    if same = true 
    if not same = false
  }
*/

/*
  Add written explanation of your solution here
  we are taking in the original word and creating a new reverse word variable. this is done by splitting
  the string apart into an array reversing its order and rejoining the array back to a string. we then compare the 
  new reverse order against the original word and see if it is the same by using the (===)
  we then use a if else statement to say if it is the same its true else its false.
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
