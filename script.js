let gameGrid = document.getElementById("grid-area");


const Grid = (() => {   //module pattern - only one grid
    /* let row1 = ["", "", ""];
    let row2 = ["", "", ""];
    let row3 = ["", "", ""]; */

    let square1 = document.getElementById("1-1");
    let square2 = document.getElementById("1-2");
    let square3 = document.getElementById("1-3");
    let square4 = document.getElementById("2-1");
    let square5 = document.getElementById("2-2");
    let square6 = document.getElementById("2-3");
    let square7 = document.getElementById("3-1");
    let square8 = document.getElementById("3-2");
    let square9 = document.getElementById("3-3");


    gameGrid = ["", "", "", "", "", "", "", "", ""];
    gameGrid[0] = square1; //This is gonna be repetitive - look for ways to make this more efficient
    gameGrid[1] = square2;
    gameGrid[2] = square3;
    gameGrid[3] = square4;
    gameGrid[4] = square5;
    gameGrid[5] = square6;
    gameGrid[6] = square7;
    gameGrid[7] = square8;
    gameGrid[8] = square9;

  
   

    return { //consider creating getter/setters
        gameGrid,
        square1,
        square2,
        square3,
        square4,
        square5,
        square6,
        square7,
        square8,
        square9
    };
})();

const Player = (name) => { //factory function - multiple players

    let sign = "";
    const setSign = (reqSign) => {
        sign = reqSign;
        return sign;
    }

    const getSign = () => {return sign;}

    const getName = () => console.log(name);

    return {setSign, getSign, getName};
}

const Game = (() => { //module pattern - only one grid

    const playRound = (sign) => {
        switch(sign){
            case "X":
                console.log("Player 1's turn!");
                break;
            
            case "O":
                console.log("Player 2's turn!");
                break;
        }

        checkWin(); //return true/false
    }

    const roundAction = () => {
        return console.log("clicked!");
    }

    const checkWin = () => {
        //TODO - returns True or False upon checking winning combinations
        console.log(Grid.gameGrid[0].textContent);
        return false;
    }

    const declareWinner = () => {
        //TODO
    }

    const getScore = () => {
        //TODO
    }

    const setScore = () => {
        //TODO
    }

    const startGame = () => {
       let player1Name = "John Doe";
       let player2Name = "Jane Doe";

       const player1 = Player(player1Name);
       const player2 = Player(player2Name);

       player1.setSign("X"); //Player 1 will always be X
       player2.setSign("O"); //Player 2 will always be O
    

       playRound(player1.getSign()); //do...while loop checking win condition - alternate between players
       
    }

    //event listeners
    Grid.square1.addEventListener("click", roundAction);

    return {
        startGame
    };
})();

Game.startGame();

