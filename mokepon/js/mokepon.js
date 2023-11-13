let playerAttack

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
    let randomattack = aleatorio(1,3)
    let spanEnemyPet = document.getElementById('enemys-pet')

    if (randomattack == 1) {
        spanEnemyPet.innerHTML = 'Hipodoge'
    } else if (randomattack == 2) {
        spanEnemyPet.innerHTML = 'Capipego'
    } else {
        spanEnemyPet.innerHTML = 'Ratigueya'
    }
}

function fireAttack() {
    playerAttack = "FIRE"
    alert(playerAttack)
}
function waterAttack() {
    playerAttack = "WATER"
    alert(playerAttack)
}
function landAttack() {
    playerAttack = "LAND"
    alert(playerAttack)
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


window.addEventListener('load', startGame)