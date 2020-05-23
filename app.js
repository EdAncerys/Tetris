document.addEventListener('DOMContentLoaded', () => {
  // Fires up only when HTML document loads
  for(let i = 0; i < 200; i++) {
    let div_element = document.createElement('div'); // Create element
    div_element.className = 'inner-div'
    div_element.innerHTML = 'div';  // Insert inner text
    document.getElementById('grid').appendChild(div_element);

  }
  

})