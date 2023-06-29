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

const roundAction = function() { //Had to change this from an arrow function to an anon function to retain "this" object
   const x = +this.dataset.x;
   const y = +this.dataset.y;

  /*  console.log("clicked!");
   console.log(`${x}, ${y}`); */

   if (isPlayerOneTurn()) { 
    Grid.setGridVal(x, y, "X");
    this.textContent = "X";
    turn++;
} else {
    Grid.setGridVal(x, y, "O");
    this.textContent = "O";
    turn++;
}
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


    const checkWin = (gridLayout) => {
        for(let i = 0; i < 3; i++) { //Checks for vertical/horizontal win condition
            if (gridLayout[0][i] === gridLayout[1][i] & gridLayout[0][i] === gridLayout[2][i]) {
                return gridLayout[i][0];
            } else if (gridLayout[i][0] === gridLayout[i][1] & gridLayout[i][0] === gridLayout[i][2]) {
                return gridLayout[i][0];
            }
        }

        if (gridLayout[0][0] === gridLayout[1][1] & gridLayout[0][0] === gridLayout[2][2]) { //checks for diagonal win condition
            return gridLayout[0][0];
        } else if (gridLayout[0][2] === gridLayout[1][1] & gridLayout[0][2] === gridLayout[2][0]) {
            return gridLayout[0][2];
        }

        if(turn === 9 & gameOver === false) {
            return "tie"
        } 
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

