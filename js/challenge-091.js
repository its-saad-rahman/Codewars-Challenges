 /**Color Ghost
Create a class Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of white" or "yellow" or "purple" or "red" when instantiated */
class Ghost {
    // your code goes here
    
    get  color (){
        const a =  ['white', 'yellow', 'purple', 'red'];
        let randomIndex = Math.floor(Math.random() * a.length); 
        let randomElement = a[randomIndex];
        return randomElement;
    }     
  };

 const ghost = new Ghost();

