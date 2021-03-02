 /**Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.

There will only be one 'longest' word. */
function findLongest(str) {

    let longest = 0
    const spl = str.split(" ").filter(a => {
        if(a.length > longest ){
            longest = a.length;
        }
    });
    return longest;
    

}
