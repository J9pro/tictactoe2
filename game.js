const boxes = Array.from(document.getElementsByClassName("box"))
//console.log(boxes)
const button = document.querySelector("#btn")

let currentPlayer = 'x'
let player2 = 'O'
let spaces = Array(9).fill(null)
//console.log(spaces)



button.addEventListener('click', resetBox)

boxes.forEach(box => {
    box.addEventListener('click', fillbox)
})

function fillbox(e) {
    const id = e.target.id;
    if (!spaces[id]) {
        spaces[id] = currentPlayer
        e.target.innerText = currentPlayer

    }
    changePlayer();
}

function changePlayer() {
    if (currentPlayer == 'x') {
        currentPlayer = 'o'
    } else {
        currentPlayer = 'x'
    }
}

//reset button

function resetBox() {
    boxes.forEach(box => {
        box.innerHTML = ''
        console.log('helo')
    })
}

//Problems

//once I click Reset for the second time the button does not reset the game.

//we need to add the winning conditions

