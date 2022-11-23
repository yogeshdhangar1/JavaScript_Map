var player1=0;
var player2=0;
const firstPlayer = new Map([ ]);
const secondPlayer = new Map([ ]);
while(player1!=10 && player1!=10 ){
    var player=Math.floor(Math.random()*(3 - 1) ) + 1;
    var dice=Math.floor(Math.random()*(7 - 1) ) + 1;
    console.log(dice);
    if(player==1){
        firstPlayer.set(("Player1- "+player1+" Chance"),dice);
        player1++;
    }
    else {
        secondPlayer.set(("Player2- "+player2+" Chance"),dice);
        player2++;
    }
}
console.log("Player 1 Play The "+player1+" times");
console.log("Player 2 Play The "+player2+" times");
console.log(firstPlayer);
console.log(secondPlayer);
Footer