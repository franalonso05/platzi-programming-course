let playerAttack
let enemysAttack
let playerLives = 3
let enemyLives = 3

function startGame() {
    let sectionSelectAttack = document.getElementById('select-attack')
    sectionSelectAttack.style.display = 'none'
    
    let sectionResetGame = document.getElementById('reset')
    sectionResetGame.style.display = 'none'

    let buttonPet = document.getElementById('button-pet')
    buttonPet.addEventListener('click', selectPet)

    

    let buttonFire = document.getElementById('button-fire')
    buttonFire.addEventListener('click', fireAttack)
    let buttonWater = document.getElementById('button-water')
    buttonWater.addEventListener('click', waterAttack)
    let buttonLand = document.getElementById('button-land')
    buttonLand.addEventListener('click', landAttack)

    let resetButton = document.getElementById('button-reset')
    resetButton.addEventListener('click', resetGame)
}

function selectPet(){
    let sectionSelectAttack = document.getElementById('select-attack')
    sectionSelectAttack.style.display = 'flex'

    let sectionSelectPet = document.getElementById('select-pet')
    sectionSelectPet.style.display = 'none'

    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipego = document.getElementById('capipego')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanPlayerPet = document.getElementById('player-pet')

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
    let spanEnemyPet = document.getElementById('enemys-pet')

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
    let spanPlayerLives = document.getElementById('player-lives')
    let spanEnemyLives = document.getElementById('enemy-lives')

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
    let sectionMessages = document.getElementById('messages')

    let paragraph = document.createElement('p')
    paragraph.innerHTML = `Your pet attacked with ${playerAttack}, the enemys pet attacked with ${enemysAttack} - ${result}`

    sectionMessages.appendChild(paragraph)
}

function createFinalMessage(finalResult) {
    let sectionMessages = document.getElementById('messages')

    let paragraph = document.createElement('p')
    paragraph.innerHTML = finalResult

    sectionMessages.appendChild(paragraph)

    let buttonFire = document.getElementById('button-fire')
    buttonFire.disabled = true
    let buttonWater = document.getElementById('button-water')
    buttonWater.disabled = true
    let buttonLand = document.getElementById('button-land')
    buttonLand.disabled = true

    let sectionResetGame = document.getElementById('reset')
    sectionResetGame.style.display = 'block'
}

function resetGame() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


window.addEventListener('load', startGame)