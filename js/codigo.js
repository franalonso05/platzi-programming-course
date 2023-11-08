function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function choise(move) {
    let result = ""
    if(move == 1) {
        result = "Rock"
    } else if(move == 2) {
        result = "Paper"
    } else if(move == 3) {
        result = "Scissor"
    } else {
        result = "BADLY CHOSEN"
    }
    return result
}
// 1 is rock, 2 is paper, 3 is scissor
let player = 0
let pc = 0
let victories = 0
let defeats = 0

while (victories < 3 && defeats < 3) {
    pc = aleatorio(1,3)
    player = prompt("Choose: 1 for rock, 2 for paper, 3 for scissor")
    //alert("Choose " + player)

    alert("PC choose: " + choise(pc))
    alert("You choose: " + choise(player))

    // COMBAT
    if(pc == player){
        alert("TIE")
    } else if((player == 1 && pc == 3) || (player == 2 && pc == 1) || (player == 3 && pc == 2)) {
        alert("YOU WIN")
        victories = victories + 1
    } else {
        alert("YOU LOSE")
        defeats = defeats + 1
    }
}

alert(`You won ${victories} times. You lost ${defeats} times.`)