const sumAll = function(x, y) {
      let sum = 0;
      let low = 0;
      let high = 0;
      function lowToHigh(a, b) {
         if (x > y) {
         high += x;
         low += y;
      }
        else {
         high += y;
         low += x;
      };
      }
      if ((Number.isInteger(x) && x > 0) && (Number.isInteger(y) && y > 0)) {
         lowToHigh(x, y);
      }
      else {
            return "ERROR";
      }
      let i = low;
      while (i <= high)  {
         sum += i;
         i++;
      }
      return sum;
      };
   

// Do not edit below this line
module.exports = sumAll;
