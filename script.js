let gameGrid = document.getElementById("grid-area");


const Grid = (() => {   //module pattern - only one grid
    let row1 = ["", "", ""];
    let row2 = ["", "", ""];
    let row3 = ["", "", ""];
})();

const Player = (name) => { //factory function - multiple players

    let sign = "";
    const setSign = (reqSign) => {
        sign = sign;
        return sign;
    }

    const getSign = () => console.log(sign);

    return {setSign, getSign};
}

const Game = (() => { //module pattern - only one grid

    const playRound = () => {
        //TODO
    }

    const checkWin = () => {
        //TODO
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
})();