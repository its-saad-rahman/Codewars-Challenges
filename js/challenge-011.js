/*Messi goals function
Messi is a soccer player with goals in three leagues:

LaLiga
Copa del Rey
Champions
Complete the function to return his total number of goals in all three leagues.

Note: the input will always be valid.

For example:

5, 10, 2  -->  17 */

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    // code goes here
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  }

  const rps = (p1, p2) => {
    if( p1 === p2){
      return 'Draw!';
    } else if((p1 === 'scissors' &&  p2 === 'paper'  || 
               (p1 === 'paper' &&  p2 === 'rock') || 
               (p1 === 'rock' &&  p2 === 'scissors'))) {
       return 'Player 1 won!';
      } else {
      return 'Player 2 won!';
    }
  };