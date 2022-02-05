// get birds to change color in opposite way
// get birds to chang color over key press and release
// hook up key release up and down
// get conditions working
// add retry/button button
// make a next level button appear when the combi is right

let solutionMelody = ['c','e','d','g']
let playerChoiceMelody = []

const playerNoteSelection = (event) => {
        const pressedKey = event
        
        if(pressedKey.key === "q") {   
                document.getElementById('bird1').style.filter = "grayscale(100%)"  
                playerChoiceMelody.push('c')
                // console.log('q')
        }
        if(pressedKey.key === "w"){
                document.getElementById('bird2').style.filter = "grayscale(100%)"
                playerChoiceMelody.push('d')
        } 
        if(pressedKey.key === "e"){
                document.getElementById('bird3').style.filter = "grayscale(100%)"
                playerChoiceMelody.push('e')
        } 
        if(pressedKey.key === "r"){
                document.getElementById('bird4').style.filter = "grayscale(100%)"
                playerChoiceMelody.push('g')
        } 
        if(pressedKey.key === "t"){
                document.getElementById('bird5').style.filter = "grayscale(100%)"
                playerChoiceMelody.push('a')
        } 
        if(pressedKey.key === "y"){
                document.getElementById('bird6').style.filter = "grayscale(100%)"
                playerChoiceMelody.push('high c')
        } 

        
        lookForMatches()
}

document.addEventListener('keydown', playerNoteSelection)
// document.addEventListener('keyup', playerNoteSelection)


const lookForMatches = () => {
        if (playerChoiceMelody.length === solutionMelody.length){         
                for (let i=0;i<playerChoiceMelody.length;i++){
                     if(playerChoiceMelody[i]!==solutionMelody[i]){
                             console.log('no match - try again')
                             // display that there is no match and reset
                             break
                             
                     } else {
                             //declare winner functions and what not
                             console.log('declare winner')
                     }
                }
        } else console.log('loop again')
        
        console.log(playerChoiceMelody, solutionMelody)
        
}
 
       





        
// const playerNoteChoices = document.querySelectorAll('.bird').forEach(playerNoteChoice => 
//     {playerNoteChoice.addEventListener('click',(event)=>{

//             console.log(event.target.id)

//  })})