/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {

  if( str1.length !== str2.length ){
    return console.log("Not Anagram");
  }

   str1 = str1.toLowerCase();
   str2 = str2.toLowerCase();

  for (let i = 0; i < str1.length ; i++) {
    
   let char = str1.charAt(i);
   let isPresent = false;
   
   for (let j = 0; j < str2.length ; j++) {
    
    let charTwo = str2.charAt(j);
    
    if( charTwo === char ){
      isPresent = true;
    } else{
      continue
    } 
    
    if(isPresent !== true ){
      return console.log("Not anagram");
    }

   }

    
  }

  return console.log("Anagram");

}

module.exports = isAnagram;
