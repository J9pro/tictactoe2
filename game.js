//-----SET UP STARTING VARIABLES-----
//This will let us change the title text to display a win notification
let playerText = document.getElementById('playerText')

//this sets the variable for the Reset button
let btn = document.getElementById('btn')

//the Array.from method creates an array from an array-like object. 
//This pulls in every element with the class of "box", then places them into an array
let boxes = Array.from(document.getElementsByClassName('box'))

//If there's a winner, go to style.css and pull the style into the boxes for the winning combination
let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winning-blocks')

//create the player X/O variables
const O_TEXT = "O"
const X_TEXT = "X"
//create a variable that makes the first player start with the X
let currentPlayer = X_TEXT

//This creates an array with 9 spaces and fills each of them with a null value. This allows you to know which box has been clicked so that a player can't click in a box that already has a value. At the start of the game, a player can click any box with a null value.
let spaces = Array(9).fill(null)


//-----PLAYING THE GAME-----
//When the game starts, each box in the array needs an event listener. When a player clicks a box, it executes the fillBox function
const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', fillBox))        
}

//The fillBox function determines all the things that happen when the click event occurs
function fillBox(event){
    //This creates a constant of id which stores the array index id of the box that is being clicked by the player
    const id = event.target.id

    //first check to see if the space at the current index is empty using the id constant
    if(!spaces[id]){ //if space is null, then the player can click
        spaces[id] = currentPlayer //now that space gets claimed by current player 
        event.target.innerText = currentPlayer //since currentPlayer starts at X, it puts X there
    
    //-----SET UP A WIN NOTIFICATION-----
    if(playerWins() !==false){
    playerText.innerHTML = `${currentPlayer} wins!`
    let winning_blocks = playerWins()
    //if a player wins, check the array combo that won and change the background color
    winning_blocks.map(box => boxes[box].style.backgroundColor=winnerIndicator)
    return
    }
    //Next we need logic to switch between players X and O
    //if currentPLayer is X, then switch to O; if currentPlayer is O, switch to X
    currentPlayer = currentPlayer == X_TEXT ? O_TEXT : X_TEXT
    }
}

//-----SET UP THE CONDITIONS NEEDED FOR A WIN-----
//Using the indexes in the array for the boxes, make a constant that shows each combination that could win the game
const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

//-----CHECK THE CONDITIONS FOR A WINNER-----
//Loop through the combinations to look for a match to winCondition
function playerWins(){
    for (const condition of winCondition){
        let [a, b, c] = condition //this places the values from the winCondition array into a, b, c so we don't have to repeat all the combos again

        //Compare the player mark (X/O) in space a to space b to space c
        //At each stage of the conditional, if it's not a match, it returns false
        if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])) {
            return [a,b,c] //return the winning combination array
        }
    }
    return false //if the for loop doesn't return true (no win), return false        
}

//-----RESET THE BOARD-----
/* To reset the board, we need to make the boxes clickable again, erase the Xs and Os, reset the win notification, and reset the currentPlayer to X. */

//Set an event listener for the Reset button. When the button is clicked, the reset function will be called.
btn.addEventListener('click', reset)

//This function does several things:
function reset(){
    spaces.fill(null) //Reset all the array boxes to null so they are clickable
    boxes.forEach(box => { 
        box.innerText = '' //Fill each box with '', erasing the Xs and Os
        box.style.backgroundColor = '' //Reset the background color to original color
    })

    //Reset the game from a win notification to the original title
    playerText = 'TIC-TAC-TOE'

    //Reset the starting player to X
    currentPlayer = X_TEXT
}

startGame()

