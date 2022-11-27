const container = document.querySelector('.container')
let index = 0; 

const text = [
  'Hello, Friend...', 
  'Welcome to my home.',
  'You are just in time for the party!',
  'What\'s your name anyway?'
]

document.addEventListener('keyup', (e) => {
  if (e.code === 'Space') {
      printNewText();
  }
})

function printNewText() {
      if (index < text.length) {
        container.innerHTML = `<p class='typed'>${text[index]}</p>`   
      index++;
      }
      if (index === text.length) {
        setTimeout(() => {
          userInput.style.display = 'inline-block';
        }, 2000)
}}
