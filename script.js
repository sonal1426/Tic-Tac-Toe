const board = document.getElementById('board');
const message = document.getElementById('message');
const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const checkWinner = () => {
  for (let combo of winningCombos) {
    const [a, b, c] = combo;
    if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
      message.innerText = `${currentPlayer} wins!`;
      gameActive = false;
      return;
    }
  }
  if (!gameState.includes('')) {
    message.innerText = 'It\'s a draw!';
    gameActive = false;
  }
};

const makeMove = (index) => {
  if (gameState[index] === '' && gameActive) {
    gameState[index] = currentPlayer;
    cells[index].innerText = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
};

const resetGame = () => {
  currentPlayer = 'X';
  gameActive = true;
  gameState = ['', '', '', '', '', '', '', '', ''];
  message.innerText = '';
  cells.forEach(cell => cell.innerText = '');
};
