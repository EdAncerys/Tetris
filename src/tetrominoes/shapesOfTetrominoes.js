'use strict';

function shapesOfTetrominoes(width) {
  const lTetromino = [
    [1, width + 1, width * 2 + 1, 2],
    [width, width + 1, width + 2, width * 2 + 2],
    [1, width + 1, width * 2 + 1, width * 2],
    [width * 2, width * 2 + 1, width * 2 + 2, width]
  ];
  const zTetromino = [
    [width * 2, width + 1, width * 2 + 1, width + 2],
    [0, width, width + 1, width * 2 + 1],
    [width * 2, width + 1, width * 2 + 1, width + 2],
    [0, width, width + 1, width * 2 + 1],
  ];
  const tTetromino = [
    [width * 1, 1, width + 1, width + 2],
    [1, width + 1, width + 2, width * 2 + 1],
    [width, width + 1, width * 2 + 1, width + 2],
    [1, width + 1, width, width * 2 + 1],
  ];
  const oTetromino = [
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
  ];
  const iTetromino = [
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3],
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3],
  ];
  return { lTetromino, zTetromino, tTetromino, oTetromino, iTetromino }
}
