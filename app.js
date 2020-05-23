document.addEventListener('DOMContentLoaded', () => {
  // Fires up only when HTML document loads
  for(let i = 0; i < 200; i++) {
    let div_element = document.createElement('div'); // Create element
    div_element.className = 'inner-div'
    div_element.innerHTML = 'div';  // Insert inner text
    document.querySelector('#grid').appendChild(div_element);
  };

  const grid = document.querySelector('#grid');
  let squres = Array.from(document.querySelectorAll('.inner-div'));
  const ScoreDisplay = document.querySelector('#score');
  const StartBtn = document.querySelector('#start-btn')
  const width = 10;
  
  // console.log(squres)
})
