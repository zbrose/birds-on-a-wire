// get birds to change color in opposite way
// get birds to chang color over key press and release
// hook up key release up and down

let solutionMelody = ['c','e','d','g']
let playerChoiceMelody = []

const playerNoteSelection = (event) => {
        const pressedKey = event
        
        if(pressedKey.key === "q") {   
                document.getElementById('bird1').style.filter = "grayscale(100%)"  
                console.log('q')
        }
        if(pressedKey.key === "w"){
                document.getElementById('bird2').style.filter = "grayscale(100%)"
         } 
        if(pressedKey.key === "e"){
                document.getElementById('bird3').style.filter = "grayscale(100%)"
         } 
        if(pressedKey.key === "r"){
                document.getElementById('bird4').style.filter = "grayscale(100%)"
         } 
        if(pressedKey.key === "t"){
                document.getElementById('bird5').style.filter = "grayscale(100%)"
         } 
        if(pressedKey.key === "y"){
                document.getElementById('bird6').style.filter = "grayscale(100%)"
         } 
 }

document.addEventListener('keydown', playerNoteSelection)
// document.addEventListener('keyup', playerNoteSelection)


        
const playerNoteChoices = document.querySelectorAll('.bird').forEach(playerNoteChoice => 
    {playerNoteChoice.addEventListener('click',(event)=>{

            console.log(event.target.id)

 })})