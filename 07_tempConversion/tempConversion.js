const convertToCelsius = function(Fahr) {
   let Cels = ((Fahr - 32) * (5 / 9));
   let roundedCelsString = Cels.toFixed(1);
   let roundedCelsNum = parseFloat(roundedCelsString);
   return roundedCelsNum;
   };


const convertToFahrenheit = function(Cels) {
   let Fahr = ((Cels * (9 / 5)) + 32);
   let roundedFahrString = Fahr.toFixed(1);
   let roundedFahrNum = parseFloat(roundedFahrString);
   return roundedFahrNum; 
   };

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
