var computernum = Math.floor(Math.random() * 10) + 1;
function checkgame() {
    var userguess = document.getElementById("userinput").value
    var display = document.getElementById("result")

    if (userguess == computernum){
        display.innerHTML = "You win"
        display.style.color = "green"
    }
    else {
        display.innerHTML = "correct num " + computernum + "you lose"
        display.style.color = "red"
         display.style.boxShadow = "0 10px 30px rgba(255, 0, 0, 0.6)"
    }

}
