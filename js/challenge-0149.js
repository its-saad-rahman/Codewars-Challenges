/**The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate. 
 * "din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 


*/
function match(str){
   return str
          .toLowerCase()
          .split('')
          .map((v,i,arr)=>{
              
              return arr.indexOf(v) == arr.lastIndexOf(v) ? '(' : ')';
          })
          .join('');
  
}
