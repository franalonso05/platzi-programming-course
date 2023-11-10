function startGame() {
    let buttonPet = document.getElementById('button-pet')
    buttonPet.addEventListener('click', selectPet)
}

function selectPet(){
    alert("YOU SELECTED YOUR PET")
}

window.addEventListener('load', startGame)