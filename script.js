const container = document.querySelector('.container')

const text = [
  'Hello, Friend...', 
  'Welcome to my home.'
]

document.addEventListener('keyup', (e) => {
  if (e.code === 'Space') {
    printNewText();
  }
})

function printNewText() {
  for (let phrase of text) {
      container.innerHTML = `<p class='typed'>${phrase}</p>`   
  }
}
