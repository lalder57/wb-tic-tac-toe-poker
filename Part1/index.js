
let player ='X';

function isBoardFull() {
    for (const square of squares) {
      if (square.innerText === '') {
        return false;
      }
    }
    return true;
}

function play(evt) {
    const targetSquare = evt.target;
    targetSquare.innerText = player;

    if (player === "X") {
        player = "0"
    } else {
        player = "X";
    }
    const playerSpan = document.querySelector("#current-player");
    playerSpan.innerText = player;

    const winner = calculateWinner();
    if (winner) {
        alert(`${winner} is the winner!`);
    } else if (isBoardFull()) {
        alert('Game is a tie!');
    }
} 


    
const squares = document.querySelectorAll('.square');

for (const square of squares) {
    square.addEventListener('click', play);
}

function calculateWinner() {
    const lines = [
      // Horizontal lines
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // Vertical lines
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // Diagonal lines
      [0, 4, 8],
      [2, 4, 6],
    ];
  
    // We want to use a traditional for-loop instead of a .forEach() loop so we can return
    // as soon as a winner is found.
    for (const line of lines) {
      const [a, b, c] = line;
      // Get the text in each square
      const squareAText = squares[a].innerText;
      const squareBText = squares[b].innerText;
      const squareCText = squares[c].innerText;
  
      // If the first square isn't blank, and it matches the value of the second and third square,
      // then we have a winner.
      if (squareAText !== '' && squareAText === squareBText && squareAText === squareCText) {
        return squareAText;
      }
    }
  
    // If we've searched all the lines, then the function returns undefined.
    return undefined;
  }


