const reverseString = function(str) {
   const arr = Array.from(str);
   const rev = arr.reverse();
   return rev.join("");
}

// Do not edit below this line
module.exports = reverseString;
