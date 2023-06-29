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
    let player1Name = "John Doe";
    let player2Name = "Jane Doe";

    let playGrid = document.querySelectorAll(".grid-item");

    
    const initGame = () => {
        
        const player1 = Player(player1Name);
        const player2 = Player(player2Name);

        player1.setSign("X"); //Player 1 will always be X
        player2.setSign("O"); //Player 2 will always be O
        
        playGrid.forEach(box => {
        box.addEventListener("click", roundAction);
    });
    //playRound(player1); //do...while loop checking win condition - alternate between players
}

const roundAction = function() {
   const x = +this.dataset.x;
   const y = +this.dataset.y;

   console.log("clicked!");
   console.log(`${x}, ${y}`);
} 

    const isPlayerOneTurn = () => {
        return (turn % 2 === 1); //Odd numbered turns (1 - true) = player 1, Even numbered turns (0 - false) = player 2
    }

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


   

    return {
        initGame
    };
})();

Game.initGame();

