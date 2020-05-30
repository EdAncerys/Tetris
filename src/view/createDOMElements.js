'use strict';

function createDOMElements() {
  for (let i = 0; i < 200; i++) {
    let div_element = document.createElement('div') // Create element
    div_element.className = 'inner-div'
    // div_element.innerHTML = 'div';  // Insert inner text
    document.querySelector('#grid').appendChild(div_element);
  }
  for (let i = 0; i < 10; i++) {
    let div_element = document.createElement('div'); // Create element
    div_element.className = 'taken'
    // div_element.innerHTML = 'div';  // Insert inner text
    document.querySelector('#grid').appendChild(div_element);
  }
  for (let i = 0; i < 16; i++) {
    let div_element = document.createElement('div'); // Create element
    div_element.className = 'mini'
    // div_element.innerHTML = 'div';  // Insert inner text
    document.querySelector('#mini-grid').appendChild(div_element);
  }
}
