function startGame() {
    let buttonPet = document.getElementById('button-pet')
    buttonPet.addEventListener('click', selectPet)
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
}

window.addEventListener('load', startGame)