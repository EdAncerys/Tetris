document.addEventListener('DOMContentLoaded', () => {
  // Fires up only when HTML document loads
  for(let i = 0; i < 200; i++) {
    let div_element = document.createElement('div'); // Create element
    div_element.className = 'inner-div';
    // div_element.innerHTML = 'div';  // Insert inner text
    document.querySelector('#grid').appendChild(div_element);
  };

  for(let i = 0; i < 10; i++) {
    let div_element = document.createElement('div'); // Create element
    div_element.className = 'taken';
    // div_element.innerHTML = 'div';  // Insert inner text
    document.querySelector('#grid').appendChild(div_element);
  };

  const grid = document.querySelector('#grid');
  let squares = Array.from(document.querySelectorAll('#grid div'));
  const ScoreDisplay = document.querySelector('#score');
  const StartBtn = document.querySelector('#start-btn')
  const width = 10;

  // console.log(squres[7]);

  // Tetrominos

  const lTetromino = [
    [1, width + 1, width*2 + 1, 2],
    [width, width + 1, width + 2, width*2 + 2],
    [1, width + 1, width*2 + 1, width*2],
    [width*2, width*2 + 1, width*2 + 2, width]
  ];

  const zTetromino = [
    [width*2, width + 1, width*2 + 1, width + 2],
    [0, width, width + 1, width*2 + 1],
    [width*2, width + 1, width*2 + 1, width + 2],
    [0, width, width + 1, width*2 + 1],
  ];

  const tTetromino = [
    [width*1, 1, width + 1, width + 2],
    [1, width + 1, width + 2, width*2 + 1],
    [width, width + 1, width*2 + 1, width + 2],
    [1, width + 1, width, width*2 + 1],
  ];

  const oTetromino = [
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
  ];

  const iTetromino = [
    [1, width + 1, width*2 + 1, width*3 + 1],
    [width, width + 1, width + 2, width + 3],
    [1, width + 1, width*2 + 1, width*3 + 1],
    [width, width + 1, width + 2, width + 3],
  ];

  // Storeing all tetrominos in array
  const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino];

  let currentPosition = 3;
  let currentRotation = 0;


  //randomly select a Tetromino and its first rotation
  let random = Math.floor(Math.random()*theTetrominoes.length);
  let current = theTetrominoes[random][currentRotation];

  //draw the Tetromino
  function draw() {
    current.forEach(index => {
      squares[currentPosition + index].classList.add('tetromino');
    })
  }

  //undraw the Tetromino
  function undraw() {
    current.forEach(index => {
      squares[currentPosition + index].classList.remove('tetromino');
    })
  }

  // Move down Tetrominos in set time intervals
  let timerId = setInterval(moveDown, 100);

  //assign functions to keyCodes
  function control(e) {
    if(e.keyCode === 37) {
      moveLeft();
    } else if (e.keyCode === 38) {
      rotate();
    } else if (e.keyCode === 39) {
      moveRight();
    } else if (e.keyCode === 40) {
      moveDown();
    }
  }
  document.addEventListener('keyup', control);

  //move down function
  function moveDown() {
    undraw();
    currentPosition += width;
    draw();
    freeze();
  }

  //freeze function
  function freeze() {
    if(current.some(index => squares[currentPosition + index + width].classList.contains('taken'))) {
      current.forEach(index => squares[currentPosition + index].classList.add('taken'));
      // start a new tetromino falling
      random = Math.floor(Math.random()*theTetrominoes.length);
      current = theTetrominoes[random][currentRotation];
      currentPosition = 3;
      draw();
    }
  }

  //move the tetromino left, unless is at the edge or there is a blockage
  function moveLeft() {
    undraw();
    const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0);
    if(!isAtLeftEdge) currentPosition -= 1;
    if(current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
      currentPosition += 1;
    }
    draw();
  }

  function moveRight() {
    undraw();
    const isAtLeftEdge = current.some(index => (currentPosition + index) % width === width - 1);
    if(!isAtLeftEdge) currentPosition += 1;
    if(current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
      currentPosition -= 1;
    }
    draw();
  }


})
