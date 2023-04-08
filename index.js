let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let message = ""
let count = 0
let player = {
    name: "Per",
    chips: 140
}
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips
function getRandomCard() {
    let randomNumber = Math.floor( Math.random() * 6 ) + 8
    if (randomNumber === 1) {
        return 11
    }else if (randomNumber > 10) {
        return 10
    }else {
        return randomNumber 
    }
    return randomNumber
}
function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards:" 
    for ( let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum:" + sum
    if (sum <= 20) {
        message = "Do you want to draw new card?"
    }else if (sum === 21) {
        message = "You've got Blackjack"
        hasBlackjack = true
    } else {
        message = "You're out of the game!" 
        isAlive = false
    }
    messageEl.textContent = message
}
function Adding() {
    if (hasBlackjack === true){
    let count = player.chips + 5
    playerEl.textContent = player.name + ": $" + count
    count = 0
}else if (isAlive === false) {
    let count = player.chips - 5
    playerEl.textContent = player.name + ": $" - count
    count = 0
                             } else {
    playerEl.textContent = player.name + ": $" + player.chips
                                    }
}
function newCard() {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    Adding()
    }