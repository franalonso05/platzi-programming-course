let playerAttack
let enemysAttack
let playerLives = 3
let enemyLives = 3

function startGame() {
    let buttonPet = document.getElementById('button-pet')
    buttonPet.addEventListener('click', selectPet)

    let buttonFire = document.getElementById('button-fire')
    buttonFire.addEventListener('click', fireAttack)
    let buttonWater = document.getElementById('button-water')
    buttonWater.addEventListener('click', waterAttack)
    let buttonLand = document.getElementById('button-land')
    buttonLand.addEventListener('click', landAttack)


}

function selectPet(){
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
}

function createMessage(result) {
    let sectionMessages = document.getElementById('messages')

    let paragraph = document.createElement('p')
    paragraph.innerHTML = 'Your pet attacked with ' + playerAttack + ', the enemys pet attacked with ' + enemysAttack + '- ' + result

    sectionMessages.appendChild(paragraph)
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


window.addEventListener('load', startGame)