// get birds to change color in opposite way
// get birds to chang color over key press and release
// hook up key release up and down
// add retry/button button
// make a next level button appear when the combi is right
// make notes appear on the lines
// record sounds that play on key input
// make the other keys not work
//add click function also

let solutionMelody = ['c','e','d','g']   // randomly generate array numbers or strings for muktiple levels
let playerChoiceMelody = []
let tryCount = 0
const notationDisplay = document.getElementById('notation-display')
const tryCountDisplay = document.getElementById('try-count')
const resetButton = document.getElementById('reset-button')

const playerNoteSelection = (event) => {                               
        const pressedKey = event
        
        if(pressedKey.key === "q") {   
                document.getElementById('bird1').style.filter = "grayscale(100%)"  
                playerChoiceMelody.push('c')
                const quarterNote = document.createElement('img')
                quarterNote.src = 'quarternote.png'
                quarterNote.classList.add('note-c')
                document.querySelector('.middle-row').appendChild(quarterNote)
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
        if (lookForMatches(playerChoiceMelody, solutionMelody)===true){
                //stop gameplay and display winner
                console.log('WE HAVE A WINNER')

        } else if (playerChoiceMelody.length === solutionMelody.length && lookForMatches(playerChoiceMelody, solutionMelody)===false) {
               // stop gameplay and ask player to reset
                console.log('NO MATCH RESET GAME')
        }

        
        console.log(playerChoiceMelody, solutionMelody)
        lookForMatches(playerChoiceMelody, solutionMelody)
        
}        

document.addEventListener('keydown', playerNoteSelection)
// document.addEventListener('keyup', playerNoteSelection)

function lookForMatches (arr1, arr2) {                                        
        return Array.isArray(arr1) && Array.isArray(arr2) && 
        arr1.length === arr2.length && 
        arr1.every((val, index)=> val === arr2[index])
}

const gameReset = () =>{
        tryCount++
        tryCountDisplay.innerText = 'Try Count: ' + tryCount
        playerChoiceMelody = []
        
}

resetButton.addEventListener('click',gameReset)

// const lookForMatches = () => {
//         if (playerChoiceMelody.length === solutionMelody.length){         
//                 for (let i=0;i<playerChoiceMelody.length;i++){
//                      if(playerChoiceMelody[i]!==solutionMelody[i]){
//                              console.log('no match - try again')        
//                              // display that there is no match and reset
//                              break
                             
//                      } else {
//                              //declare winner functions and what not        
//                              console.log('declare winner')
//                      }
//                 }
//         } else console.log('loop again')
//   }

const playerNoteChoices = document.querySelectorAll('.bird').forEach(playerNoteChoice => 
    {playerNoteChoice.addEventListener('click',(event)=>{

        const playerBirdChoice = event.target.id

        if (playerBirdChoice === 'bird1'){
                document.getElementById('bird1').style.filter = "grayscale(100%)"  
                playerChoiceMelody.push('c')
                // const quarterNote = document.createElement('img')
                // quarterNote.src = 'quarternote.png'
                // quarterNote.classList.add('note-c')
                // document.querySelector('.middle-row').appendChild(quarterNote)
        }  if (playerBirdChoice === 'bird2'){
                document.getElementById('bird2').style.filter = "grayscale(100%)"  
                playerChoiceMelody.push('d')
                const quarterNote = document.createElement('img')
                quarterNote.src = 'quarternote.png'
                quarterNote.classList.add('note-d')
                document.querySelector('.middle-row').appendChild(quarterNote)
        } 





            console.log(event.target.id)
            console.log(playerChoiceMelody, solutionMelody)
            lookForMatches(playerChoiceMelody, solutionMelody)
 })})