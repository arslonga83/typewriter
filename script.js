const container = document.querySelector('.container')
let index = 0; 

const text = [
  'Hello, Friend...', 
  'Welcome to my home.',
  'You are just in time for the party!'
]

document.addEventListener('keyup', (e) => {
  if (e.code === 'Space') {
    setInterval(() => {
      printNewText();
    }, 3000)
    
  }
})

function printNewText() {
      if (index < text.length) {
        container.innerHTML = `<p class='typed'>${text[index]}</p>`   
      index++
      }
      
  
}
