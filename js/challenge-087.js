 /**I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

Can you figure out what's wrong here? */
function swapValues(arr) {
    // var args = Array.prototype.slice.call(arguments);
     var temp = arr[0];
     arr[0] = arr[1];
     arr[1] = temp;
   return [arr[1], arr[0]]
   //[temp,arr[0] ]
   
 }