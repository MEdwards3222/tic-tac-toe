let gameGrid = document.getElementById("grid-area");


const Grid = (() => {   //module pattern - only one grid
    gameGrid = [["", "", ""], ["", "", ""], ["", "", ""]];

    const getGrid = () => {
        return gameGrid;
    }

    const resetGrid = () => {
        gameGrid = [["", "", ""], ["", "", ""], ["", "", ""]];
    }

    const setGridVal = (i, j, val) => {
        gameGrid[i][j] = val;
    }

    return { //consider creating getter/setters
        gameGrid,
        getGrid,
        resetGrid,
        setGridVal
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

    let turn = 1;
    let gameOver = false;

    /* const roundAction = (player) => {
        console.log(`${player.getName()} clicked!`);
    } */

    const playRound = (player) => {
        switch(player.getSign()){
            case "X":
                console.log("Player 1's turn!");
                break;
            
            case "O":
                console.log("Player 2's turn!");
                break;
        }

        checkWin(); //return true/false
    }


    const checkWin = () => {
        //TODO - returns True or False upon checking winning combinations
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
    

       playRound(player1); //do...while loop checking win condition - alternate between players
       
    }

   

    return {
        startGame
    };
})();

Game.startGame();

