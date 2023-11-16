const sectionSelectAttack = document.getElementById('select-attack')
const sectionResetGame = document.getElementById('reset')
const buttonPet = document.getElementById('button-pet')
const buttonFire = document.getElementById('button-fire')
const buttonWater = document.getElementById('button-water')
const buttonLand = document.getElementById('button-land')
const resetButton = document.getElementById('button-reset')

const sectionSelectPet = document.getElementById('select-pet')
const inputHipodoge = document.getElementById('hipodoge')
const inputCapipego = document.getElementById('capipego')
const inputRatigueya = document.getElementById('ratigueya')
const spanPlayerPet = document.getElementById('player-pet')

const spanEnemyPet = document.getElementById('enemys-pet')

const spanPlayerLives = document.getElementById('player-lives')
const spanEnemyLives = document.getElementById('enemy-lives')

const sectionMessages = document.getElementById('result')
const playerAttacks = document.getElementById('player-attacks')
const enemyAttacks = document.getElementById('enemy-attacks')

let playerAttack
let enemysAttack
let playerLives = 3
let enemyLives = 3

function startGame() {
    
    sectionSelectAttack.style.display = 'none'
    sectionResetGame.style.display = 'none'

    buttonPet.addEventListener('click', selectPet)

    buttonFire.addEventListener('click', fireAttack)
    
    buttonWater.addEventListener('click', waterAttack)
    
    buttonLand.addEventListener('click', landAttack)

    resetButton.addEventListener('click', resetGame)
}

function selectPet(){
    
    sectionSelectAttack.style.display = 'flex'
    sectionSelectPet.style.display = 'none'

    if (inputHipodoge.checked) {
        spanPlayerPet.innerHTML = 'Hipodoge'
    } else if (inputCapipego.checked) {
        spanPlayerPet.innerHTML = 'Capipego'
    } else if (inputRatigueya.checked) {
        spanPlayerPet.innerHTML = 'Ratigueya'
    } else {
        alert("Select a pet")
    }

    selectEnemyPet()
}

function selectEnemyPet() {
    let randompet = aleatorio(1,3)
    
    if (randompet == 1) {
        spanEnemyPet.innerHTML = 'Hipodoge'
    } else if (randompet == 2) {
        spanEnemyPet.innerHTML = 'Capipego'
    } else {
        spanEnemyPet.innerHTML = 'Ratigueya'
    }
}

function fireAttack() {
    playerAttack = "FIRE"
    randomEnemysAttack()
}
function waterAttack() {
    playerAttack = "WATER"
    randomEnemysAttack()
}
function landAttack() {
    playerAttack = "LAND"
    randomEnemysAttack()
}

function randomEnemysAttack() {
    let randomAttack = aleatorio(1,3)

    if (randomAttack == 1) {
        enemysAttack = "FIRE"
    } else if (randomAttack == 2){
        enemysAttack = "WATER"
    } else {
        enemysAttack = "LAND"
    }
    
    combat()
}

function combat() {
    
    if(enemysAttack == playerAttack){
        createMessage("TIE")
    } else if((playerAttack == 'FIRE' && enemysAttack == 'LAND') || (playerAttack == 'WATER' && enemysAttack == 'FIRE') || (playerAttack == 'LAND' && enemysAttack == 'WATER')) {
        createMessage("YOU WIN")
        enemyLives--
        spanEnemyLives.innerHTML = enemyLives
    } else {
        createMessage("YOU LOSE")
        playerLives--
        spanPlayerLives.innerHTML = playerLives
    }

    reviewLives()
}

function reviewLives() {
    if(enemyLives == 0) {
        createFinalMessage("CONGRATULATIONS! YOU WON :)")
    } else if(playerLives == 0) {
        createFinalMessage("SORRY, YOU LOST :(")
    }
}

function createMessage(result) {
    
    let newPlayerAttack = document.createElement('p')
    let newEnemyAttack = document.createElement('p')

    sectionMessages.innerHTML = result
    newPlayerAttack.innerHTML = playerAttack
    newEnemyAttack.innerHTML = enemysAttack

    playerAttacks.appendChild(newPlayerAttack)
    enemyAttacks.appendChild(newEnemyAttack)
}

function createFinalMessage(finalResult) {
    
    sectionMessages.innerHTML = finalResult

    buttonFire.disabled = true
    buttonWater.disabled = true
    buttonLand.disabled = true

    sectionResetGame.style.display = 'block'
}

function resetGame() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


window.addEventListener('load', startGame)