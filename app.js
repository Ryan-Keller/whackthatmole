
const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeRemaining = document.querySelector('#time-remaining')
let score = document.querySelector('#score')

let result = 0
let currentTime = timeRemaining.textContent

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole')
    })
    let randomPosition = square[Math.floor(Math.random() *9)]
    randomPosition.classList.add('mole')
    hitPosition = randomPosition.id
}

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if(id.id === hitPosition){
            result = result + 1
            score.textContent = result
            hitPosition=null
        }
    })
})

function moveMole() {
    let timerId = null
    timerId = setInterval(randomSquare, 750)
}

function countDown() {
    currentTime--
    timeRemaining.textContent = currentTime

    if(currentTime === 0) {
        clearInterval(timerId)
        alert('Game Over. you made this much guac! ' + result)
    }
}

let timerId = setInterval(countDown, 1000)
moveMole()
