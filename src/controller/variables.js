'use strict';

function variables() {
  const grid = document.querySelector('#grid');
  let squares = Array.from(document.querySelectorAll('#grid div'));
  const scoreDisplay = document.querySelector('#score');
  const startBtn = document.querySelector('#start-btn');
  const width = 10;
  let nextRandom = 0;
  let timerId;
  let score = 0;
  const colors = [
    'orange',
    'red',
    'purple',
    'green',
    'blue'
  ]
  let currentPosition = 3
  let currentRotation = 0
  
  return { width, squares, colors, timerId, nextRandom, startBtn, score, scoreDisplay, grid, currentPosition, currentRotation }
}
