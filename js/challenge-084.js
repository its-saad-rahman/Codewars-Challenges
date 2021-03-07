/**#To square(root) or not to square(root)

Write a method, that will get an integer array as parameter and will process every number from this array.
Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

[4,3,9,7,2,1] -> [2,9,3,49,4,1]
The input array will always contain only positive numbers and will never be empty or null. */ 


function squareOrSquareRoot(array) {
  const  isSquare = function (n) {
        return Math.sqrt(n) % 1 === 0;
    };
    return array.map(number => isSquare(number) ? Math.sqrt(number) : number ** 2)
}

