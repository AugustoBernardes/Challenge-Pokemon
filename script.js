

let text = document.getElementById("mensage")


function receiveAnswer(){
    let mensageInput = document.getElementById("answer")
    let mensage = mensageInput.value
    let mensageUpper =  mensage.toUpperCase()
    console.log(mensage)
    console.log(text)


    if (mensageUpper == "PIKACHU"){
        text.innerHTML = ` <p>Ash: Hi,help me here!</p>
        <br>
        <p>Ash:What is that pokémon?</p>
        <br>
        <p>You:Pikachu!</p>
        <br>
        <p>Ash:You're right.Congrats!</p>`


    } else {
        text.innerHTML = ` <p>Ash: Hi,help me here!</p>
        <br>
        <p>Ash:What is that pokémon?</p>
        <br>
        <p>You:${mensage}</p>
        <br>
        <p>Ash:You missed, is a Pikachu!</p>`
    }        

   document.getElementById('pikachu-image').src ="./assets/images/pikachu.gif";

    
}