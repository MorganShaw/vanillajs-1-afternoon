// console.log('Hello, World!')
const board = [];
const topLeft = board[0];
const topCenter = board[1];
const topRight = board[2];
const middleLeft = board[3];
const middleCenter = board[4];
const middleRight = board[5];
const bottomLeft = board[6];
const bottomCenter = board[7];
const bottomRight = board[8];


// function play(clickedId) {
//     const playerSpan = document.getElementById("player");
//     const clickedElement = document.getElementById(clickedId);
//     if(playerSpan.innerText === "X") {
//         playerSpan.innerText = "O";
//         clickedElement.innerText = "X";
//         board[clickedID] = "X"
//     } else {
//         playerSpan.innerText = "X";
//         clickedElement.innerText = "O";
//         board[clickedID] = "O"
//     }

// }

function play(clickedId) {
    const playerSpan = document.getElementById("player");
    const clickedElement = document.getElementById(clickedId);
    if(playerSpan.innerText === "X") {
        playerSpan.innerText = "O";
        clickedElement.innerText = "X";
        board[clickedID] = "X";
    } else {
        playerSpan.innerText = "X";
        clickedElement.innerText = "O";
        board[clickedID] = "O";
    } if(topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
        alert("You won!");
    } else if(topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
        alert("You won!");
    } else if(middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
        alert("You won!");
    } else if(bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
        alert("You won!");
    } else if(bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight) {
        alert("You won!");   
    } else if(topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
        alert("You won!");
    } else if(topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
        alert("You won!");
    } else if(topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
        alert("You won!");
    } else {
        for(let i = 0; i < board.length; i++) {
            if(board[i] === undefined) {
               boardfull = false; 
            } else {
                alert("Cat's Game!");
            }
        }
    }    
}


