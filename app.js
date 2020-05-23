document.addEventListener('DOMContentLoaded', () => {
  // Fires up only when HTML document loads
  // Adding grid tiles
  for(let i = 0; i < 200; i++) {
    let div_element = document.createElement('div'); // Create element
    div_element.className = 'bottom';
    // div_element.innerHTML = 'div';  // Insert inner text
    document.querySelector('#grid').appendChild(div_element);
  };
  // Add bottom grid to implement if condition to stop Tetrominos from exitting the canvas
  for(let i = 0; i < 10; i++) {
    let div_element = document.createElement('div'); // Create element
    div_element.className = 'inner-div'
    // div_element.innerHTML = 'div';  // Insert inner text
    document.querySelector('#grid').appendChild(div_element);
  };


  const grid = document.querySelector('#grid');
  let squres = Array.from(document.querySelectorAll('.inner-div'));
  const ScoreDisplay = document.querySelector('#score');
  const StartBtn = document.querySelector('#start-btn');
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
  const theTetrominos = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino];


})
