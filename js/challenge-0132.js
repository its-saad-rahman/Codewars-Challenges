/**Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b. */
function arrayDiff(array1,array2){

   return array1.filter(ele => !array2.includes(ele));
}
