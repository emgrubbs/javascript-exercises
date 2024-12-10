const removeFromArray = function(array, ...parameters) {
   let removed = [];
   let newArray = 0;
   for (const element of array) {
      //console.log(element);
      if (parameters.includes(element)) {
        //console.log(element);
        removed.push(element);
   }
   };
   for (const rem of removed) {
   let index = array.indexOf(rem);
     
         inArray =+ array.splice(index, 1);
      //console.log(array);
   }
   return array;
};



/*
const func = function(array, ...arguments) {
   let inArray = 0;
   for (const arg of arguments) {
      console.log(arg);
      if (array.includes(arg)) {
         console.log(arg);
      let index = array.indexOf(arg);
      console.log(array);
      inArray =+ array.splice(index, 1);
      console.log(array);

   }
   };
   return array;     
};



const removeFromArray = function(array, element1, element2) {
   let index1 = array.indexOf(element1);
   let x = "";
   x =+ array.splice(index1, 1);
   if (element2 === undefined) {
      return array;
   } else {
   let index2 = array.indexOf(element2);
   let y = "";
   y =+ array.splice(index2, 1);
   return array;
   }
   };


   */
// Do not edit below this line
module.exports = removeFromArray;
