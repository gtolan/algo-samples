
const isPalidrome = (str) => {
  let rev = str.split("").reverse().join("");
  return rev === str ? true : false;
};

const findLongestString = (current, longest) => {
    return longest.length > current.length ? longest : current; 
};

const longestPalindrome = (str) => {
  let letters = Array.from(str);
  let longest = '';
  //Sliding window for each iteration - longest possible is full list
  //slide back from the end for each iteration of the letter sequence
  for (let i = 0; i < letters.length; i++) {
    for (let j = letters.length - 1; j > i; j--) {
      let currentString = str.substring(i, j);
      if (isPalidrome(currentString)) {
            longest = findLongestString(currentString, longest);
      }
    }
  }
  console.log('longest',longest)
};

const word = "stkrrrrrktsbraaab";
longestPalindrome(word);
