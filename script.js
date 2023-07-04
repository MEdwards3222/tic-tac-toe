const Grid = (() => {   //module pattern - only one grid
    let gameGrid = document.getElementById("grid-area");
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

    const getName = () => {return name;}

    return {setSign, getSign, getName};
}

const Game = (() => { //module pattern - only one grid

    let turn = 1;
    let gameOver = false;
    let player1Name = "Player 1"; //Scrapped functionality to have players use custom name - better for UX to have users just jump into tic tac toe
    let player2Name = "Player 2";
    let player1;
    let player2;

    let playGrid = document.querySelectorAll(".grid-item");
    let textBox = document.getElementById("text-box");
    let resetBtn = document.getElementById("reset-game");
    let gameDisplay = document.getElementById("game");
    let splashBtn = document.getElementById("return-to-splash");
    let crossIndicator = document.getElementById("card-body-cross");
    let circleIndicator = document.getElementById("card-body-circle");

    
    const initGame = () => {
        gameDisplay.hidden = false;


        player1 = Player(player1Name);
        player2 = Player(player2Name);

        player1.setSign("X"); //Player 1 will always be X
        player2.setSign("O"); //Player 2 will always be O
        
        playGrid.forEach(box => {
             box.addEventListener("click", roundAction);
        });
        
        textBox.textContent = "Player 1's turn.";
        highlightCross();
        hideResetBtn();

        splashBtn.addEventListener("click", displaySplash);
}

const roundAction = function() { //Had to change this from an arrow function to an anon function to retain "this" object
   const x = +this.dataset.x;
   const y = +this.dataset.y;

   if (isPlayerOneTurn()) { 
        Grid.setGridVal(x, y, "X");
        this.innerHTML = '<i class="fa-solid fa-x fa-xl" style="color: #2b95ff;"></i>';
        let winSign = checkWin(Grid.getGrid());
        declareWinner(winSign);
        turn++;
    } else {
        Grid.setGridVal(x, y, "O");
        this.innerHTML = '<i class="fa-solid fa-o fa-xl" style="color: #d50000;"></i>';
        let winSign = checkWin(Grid.getGrid());
        declareWinner(winSign);
        turn++;
    }
} 

    const isPlayerOneTurn = () => {
        if (turn % 2 === 1) {
            console.log(`Turn number: ${turn}`);
            highlightCircle();
            textBox.textContent = "Player 2's turn.";
        } else {
            console.log(`Turn number: ${turn}`);
            highlightCross();
            textBox.textContent = "Player 1's turn.";
        }

        return (turn % 2 === 1); 
    }


    const checkWin = (gridLayout) => {
        for(let i = 0; i < 3; i++) { //Checks for vertical/horizontal win condition
            if (gridLayout[0][i] === gridLayout[1][i] & gridLayout[0][i] === gridLayout[2][i]) {
                return gridLayout[0][i];
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
    }

    const declareWinner = (sign) => {
        if (sign === "X") {
            displayWinner(player1);
            highlightCross();
            greyOutCircle();
            gameOver === true;
            playGrid.forEach(box => {
                box.removeEventListener("click", roundAction);
                box.className += " disabled-blue";
                showResetBtn();
            });
        } else if (sign === "O") {
            displayWinner(player2);
            highlightCircle();
            greyOutCross();
            gameOver === true;
            playGrid.forEach(box => {
                box.removeEventListener("click", roundAction);
                box.className += " disabled-red";
                showResetBtn();
            });
        } else if (sign === "tie") {
            displayTie();
            greyOutCircle();
            greyOutCross();
            gameOver === true;
            playGrid.forEach(box => {
                box.removeEventListener("click", roundAction);
                box.className += " disabled";
                showResetBtn();
            });
        }
    }

    const displayWinner = (player) => {
        textBox.textContent = `${player.getName()} is the winner!`
    }

    const displayTie = () => {
        textBox.textContent = `It's a tie.`
    }

    const resetGame = () => {
        turn = 1;
        gameOver === false;

        Grid.resetGrid();
        clearGrid();
        textBox.textContent = "Player 1's turn."
        initGame();
    }

    const reinitGame = () => {
        turn = 1;
        gameOver === false;

        Grid.resetGrid();
        clearGrid();
        textBox.textContent = "Player 1's turn."
    }

    const clearGrid = () => {
        playGrid.forEach(box => {
            box.textContent = "";
            box.className = "grid-item";
        });
    }

    const showResetBtn = () => {
        resetBtn.disabled = false;
        resetBtn.hidden = false;
        resetBtn.style.visibility = 'visible';
        resetBtn.addEventListener("click", resetGame);
    }

    const hideResetBtn = () => {
        resetBtn.disabled = true;
        resetBtn.hidden = true;
        resetBtn.style.visibility = 'hidden';
    }

    const displaySplash = () => {
        gameDisplay.hidden = true;
        Splash.welcome();
        reinitGame();
    }

    const highlightCross = () => {
        circleIndicator.style.backgroundColor ="white";
        crossIndicator.style.backgroundColor = "#bfdbfe";
    }

    const highlightCircle = () => {
        crossIndicator.style.backgroundColor = "white";
        circleIndicator.style.backgroundColor = "#fecaca";
    }

    const greyOutCross = () => {
        crossIndicator.style.backgroundColor = "#d1d5db";
    }

    const greyOutCircle = () => {
        circleIndicator.style.backgroundColor = "#d1d5db";
    }

    return {
        initGame
    };
})();

const Splash = (() => { //module pattern - only one splash screen
    let intro = document.getElementById("intro");
    let playHuman = document.getElementById("play-human");
    let playAI = document.getElementById("play-ai");

    const welcome = () => {
        intro.hidden = false;
        playHuman.addEventListener("click", prepGame);
    }

    const prepGame = () => {
        intro.hidden = true;
        Game.initGame();
    }

    return {
        welcome
    };
})();

//Game.initGame();

Splash.welcome();

