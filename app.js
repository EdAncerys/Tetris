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

  for(let i = 0; i < 16; i++) {
    let div_element = document.createElement('div'); // Create element
    div_element.className = 'mini';
    // div_element.innerHTML = 'div';  // Insert inner text
    document.querySelector('#mini-grid').appendChild(div_element);
  };

  const grid = document.querySelector('#grid');
  let squares = Array.from(document.querySelectorAll('#grid div'));
  const scoreDisplay = document.querySelector('#score');
  const startBtn = document.querySelector('#start-btn')
  const width = 10;
  let nextRandom = 0;
  let timerId;
  let score = 0;

  // console.log(squres[7]);

  // Tetrominoes

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

  // Storeing all Tetrominoes in array
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
  if(timerId) {
    document.addEventListener('keyup', control);
  }

  // Move down Tetrominoes in set time intervals
  // timerId = setInterval(moveDown, 1000);

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
      random = nextRandom;
      nextRandom = Math.floor(Math.random()*theTetrominoes.length);
      current = theTetrominoes[random][currentRotation];
      currentPosition = 3;
      draw();
      displayShape();
      addScore();
      gameOver();
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

  function rotate() {
    undraw();
    currentRotation ++;
    if(currentRotation === current.length) {
      currentRotation = 0;
    }
    current = theTetrominoes[random][currentRotation];
    draw();
  }

  // show next Tetromino in mini-grid
  const displaySquares = document.querySelectorAll('#mini-grid div');
  const displayWidth = 4;
  let displayIndex = 0;

  // The Tetrominoes without rotation
  const upNextTetrominoes = [
    [1, displayWidth+1, displayWidth*2+1, 2], //lTetromino
    [0, displayWidth, displayWidth+1, displayWidth*2+1], //zTetromino
    [1, displayWidth, displayWidth+1, displayWidth+2], //tTetromino
    [0, 1, displayWidth, displayWidth+1], //oTetromino
    [1, displayWidth+1, displayWidth*2+1, displayWidth*3+1] //iTetromino
  ]

  // Display next shape of Tetrominoes in mini-grid
  function displayShape() {
    //remove any trace of a tetromino form the entire grid
    displaySquares.forEach(square => {
      square.classList.remove('tetromino');
    })
    upNextTetrominoes[nextRandom].forEach( index => {
      displaySquares[displayIndex + index].classList.add('tetromino');
    })
  }

  // Add functionality to the button
  startBtn.addEventListener('click', () => {
    if (timerId) {
      clearInterval(timerId)
      document.removeEventListener('keyup', control);
      timerId = null
    } else {
      draw()
      document.addEventListener('keyup', control);
      timerId = setInterval(moveDown, 1000)
      displayShape()
    }
  })

  // Add scoreDisplay
  function addScore() {
    for (let i = 0; i < 199; i +=width) {
      const row = [i, i+1, i+2, i+3, i+4, i+5, i+6, i+7, i+8, i+9]

      if(row.every(index => squares[index].classList.contains('taken'))) {
        score +=10
        scoreDisplay.innerHTML = score
        row.forEach(index => {
          squares[index].classList.remove('taken')
          squares[index].classList.remove('tetromino')
        })
        const squaresRemoved = squares.splice(i, width)
        squares = squaresRemoved.concat(squares)
        squares.forEach(cell => grid.appendChild(cell))
      }
    }
  }

  // Game over
  function gameOver() {
    if(current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
      scoreDisplay.innerHTML = 'Game Over';
      clearInterval(timerId);
    }
  }




})
