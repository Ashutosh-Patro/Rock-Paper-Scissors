const playerScore = document.querySelector("#player-score")
const computerScore = document.querySelector("#computer-score")
const buttons = document.querySelectorAll(".selection button")
const playerIcon = document.querySelector(".player i")
const computerIcon = document.querySelector(".computer i")

var computerScoreShow = 0
var playerScoreShow = 0

const rockIcon = "fas fa-hand-rock";
const paperIcon = "fas fa-hand-paper";
const scissorsIcon = "fas fa-hand-scissors";

const randomClasses = [rockIcon, paperIcon, scissorsIcon]
const text = document.querySelector("#demo")
const text2 = document.querySelector("#demo2")

const tie = () => {
    text.innerHTML = "It's a tie!"
    text2.innerHTML = "It's a tie! Pick again"
}

const win = () => {
    text.innerHTML = "You win!"
    text2.innerHTML = "That's great! Pick again"
}

const lose = () => {
    text.innerHTML = "You loss!"
    text2.innerHTML = "That's sad! Pick again"
}

const game = () => {
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            console.log('hi');
            let clickedBtn = e.target.className
            playerIcon.className = clickedBtn
            console.log(playerIcon.className);
            let randomNum = Math.floor(Math.random() * randomClasses.length)
            computerIcon.className = randomClasses[randomNum]

            if (playerIcon.className == computerIcon.className) {
                playerScore.innerHTML = playerScore.innerHTML
                computerScore.innerHTML = computerScore.innerHTML
                tie()
            }
            else if (playerIcon.className == randomClasses[0] && computerIcon.className == randomClasses[1]) {
                computerScoreShow++
                playerScore.innerHTML = playerScore.innerHTML
                computerScore.innerHTML = computerScoreShow
                lose()
            }
            else if (playerIcon.className == randomClasses[0] && computerIcon.className == randomClasses[2]) {
                playerScoreShow++
                playerScore.innerHTML = playerScoreShow
                computerScore.innerHTML = computerScore.innerHTML
                win()
            }
            else if (playerIcon.className == randomClasses[1] && computerIcon.className == randomClasses[0]) {
                playerScoreShow++
                playerScore.innerHTML = playerScoreShow
                computerScore.innerHTML = computerScore.innerHTML
                win()
            }
            else if (playerIcon.className == randomClasses[1] && computerIcon.className == randomClasses[2]) {
                computerScoreShow++
                playerScore.innerHTML = playerScore.innerHTML
                computerScore.innerHTML = computerScoreShow
                lose()
            }
            else if (playerIcon.className == randomClasses[2] && computerIcon.className == randomClasses[0]) {
                computerScoreShow++
                playerScore.innerHTML = playerScore.innerHTML
                computerScore.innerHTML = computerScoreShow
                lose()
            }
            else if (playerIcon.className == randomClasses[2] && computerIcon.className == randomClasses[1]) {
                playerScoreShow++
                playerScore.innerHTML = playerScoreShow
                computerScore.innerHTML = computerScore.innerHTML
                win()
            }
            else {
                text.innerHTML = "Pick a button"
            }
            if (playerScoreShow == 5 || computerScoreShow == 5) {
                text2.innerHTML = "Game Over"
                if (playerScoreShow == 5) {
                    text.innerHTML = "You Win!!"
                }
                else if (computerScoreShow == 5) {
                    text.innerHTML = "Computer Wins!!"
                }
                playerScoreShow = 0
                playerScore.innerHTML = playerScoreShow
                computerScoreShow = 0
                computerScore.innerHTML = computerScoreShow
            }
        })
    })
}

game()