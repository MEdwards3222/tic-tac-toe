let gameGrid = document.getElementById("grid-area");


const Grid = (() => {   //module pattern - only one grid
    /* let row1 = ["", "", ""];
    let row2 = ["", "", ""];
    let row3 = ["", "", ""]; */

    gameGrid = ["", "", "", "", "", "", "", "", ""];
    gameGrid[0] = document.getElementById("1-1").textContent; //This is gonna be repetitive - look for ways to make this more efficient
    gameGrid[1] = document.getElementById("1-2").textContent;
    gameGrid[2] = document.getElementById("1-3").textContent;
    gameGrid[3] = document.getElementById("2-1").textContent;
    gameGrid[4] = document.getElementById("2-2").textContent;
    gameGrid[5] = document.getElementById("2-3").textContent;
    gameGrid[6] = document.getElementById("3-1").textContent;
    gameGrid[7] = document.getElementById("3-2").textContent;
    gameGrid[8] = document.getElementById("3-3").textContent;

    return { //consider creating getter
        gameGrid
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

        checkWin();
    }

    const checkWin = () => {
        //TODO - returns True or False upon checking winning combinations
        console.log(Grid.gameGrid[0]);
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
    
       playRound(player1.getSign());
       
    }

    return {
        startGame
    };
})();

Game.startGame();

