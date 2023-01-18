const boxes = Array.from(document.getElementsByClassName("box"))
const button = document.querySelector("#btn")



let currentPlayer = 'x'
let player2 = 'O'
let spaces = Array(9).fill(null)

console.log(boxes)

boxes.forEach(box => {
    box.addEventListener('click', fillbox)
})

function fillbox(e){
    const id = e.target.id
if(!spaces[id]){
    spaces[id] = currentPlayer
    e.target.innerText = currentPlayer
}else{
    player2 = "O"
}}

