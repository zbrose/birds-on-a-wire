// get birds animate in some way on selection
// get birds to change color over click press and release or mouse over, make interactive
// record sounds and upload them into here
// create a Bird object instance and run it for each click?

const playerBirds = [      // map over each instance of bird
        {

        }
]



let solutionMelody = ['c','e','d','g']   // randomly generate array numbers or strings for muktiple levels
let playerChoiceMelody = []
let tryCount = 0
const noteInput =  document.querySelector('.note-input')
const resetButton = document.getElementById('reset-button')
const matchDisplay = document.getElementById('instructions') 
const cNoteAudio = document.getElementById('c-note') 
const dNoteAudio = document.getElementById('d-note') 
const eNoteAudio = document.getElementById('e-note') 
const gNoteAudio = document.getElementById('g-note') 
const aNoteAudio = document.getElementById('a-note') 

const playMelody = document.getElementById('play-melody').addEventListener('click',()=>{
        document.getElementById('melody').play()})
const playRelativePitch = document.getElementById('play-relative').addEventListener('click',()=>{
        document.getElementById('relative-pitch').play()})

function lookForMatches (arr1, arr2) {                                        
        return Array.isArray(arr1) && Array.isArray(arr2) && 
        arr1.length === arr2.length && 
        arr1.every((val, index)=> val === arr2[index])
}

const gameReset = () =>{
        if (resetButton.innerText === 'Reset'){
         document.querySelectorAll('.bird').forEach(playerNoteChoice => {
        playerNoteChoice.addEventListener('click', clickEvent)
        })
        tryCount++
        document.getElementById('try-count').innerText = 'Try Count: ' + tryCount
        playerChoiceMelody = []
        matchDisplay.innerText = 'Give it another go!'
        const nodeList = document.querySelectorAll('.note')
        while (noteInput.firstChild){
                noteInput.removeChild(noteInput.firstChild)
        }
        for (let i=0;i<nodeList.length;i++){
               nodeList[i].classList.remove('.note-c','note-d','note-e','note-g','note-a')
         }
        } else console.log('next level')
        
}


resetButton.addEventListener('click',gameReset)

const playerNoteChoices = document.querySelectorAll('.bird').forEach(playerNoteChoice => {
        playerNoteChoice.addEventListener('click', clickEvent)
})

function clickEvent (event) {
        const playerBirdChoice = event.target.id
        // if (matchDisplay.innerText === 'NICE WORK!' || matchDisplay.innerText === 'Shucks!  Not a match.  Try again?') {}              //possible way to stop game

        if (playerBirdChoice === 'bird1'){
                document.getElementById('bird1') 
                playerChoiceMelody.push('c')
                const displayCNote = document.createElement('img')
                displayCNote.src = 'ledgerlineqnote.png'
                displayCNote.classList.add('display-c','note')
                noteInput.appendChild(displayCNote)
                cNoteAudio.play()
        }  if (playerBirdChoice === 'bird2'){
                document.getElementById('bird2') 
                playerChoiceMelody.push('d')
                const displayDNote = document.createElement('img')
                displayDNote.src = 'quarternote.png'
                displayDNote.classList.add('display-d','note')
                noteInput.appendChild(displayDNote)
                dNoteAudio.play()
        } if (playerBirdChoice === 'bird3'){
                document.getElementById('bird3') 
                playerChoiceMelody.push('e')
                const displayENote = document.createElement('img')
                displayENote.src = 'quarternote.png'
                displayENote.classList.add('display-e','note')
                noteInput.appendChild(displayENote)
                eNoteAudio.play()
        } if (playerBirdChoice === 'bird4'){
                document.getElementById('bird4') 
                playerChoiceMelody.push('g')
                const displayGNote = document.createElement('img')
                displayGNote.src = 'quarternote.png'
                displayGNote.classList.add('display-g','note')
                noteInput.appendChild(displayGNote)
                gNoteAudio.play()
        } if (playerBirdChoice === 'bird5'){
                document.getElementById('bird5') 
                playerChoiceMelody.push('a')
                const displayANote = document.createElement('img')
                displayANote.src = 'quarternote.png'
                displayANote.classList.add('display-a','note')
                noteInput.appendChild(displayANote)
                aNoteAudio.play()
        } 


        if (lookForMatches(playerChoiceMelody, solutionMelody)===true){
                matchDisplay.innerText = 'NICE WORK!'
                resetButton.innerText = "Next Level"
                //add new function with audio play listener
                document.querySelectorAll('.bird').forEach(playerNoteChoice => {
                        playerNoteChoice.removeEventListener('click', clickEvent)
                })
                document.querySelectorAll('.bird').forEach(playerNoteChoice => {
                        playerNoteChoice.addEventListener('click', postGameClick)
                })
                
                console.log('WE HAVE A WINNER')
        
        } else if (playerChoiceMelody.length === solutionMelody.length && lookForMatches(playerChoiceMelody, solutionMelody)===false) {
                matchDisplay.innerText = 'Shucks!  Not a match.  Try again?'
                document.querySelectorAll('.bird').forEach(playerNoteChoice => {
                        playerNoteChoice.removeEventListener('click', clickEvent)
                })
                document.querySelectorAll('.bird').forEach(playerNoteChoice => {
                        playerNoteChoice.addEventListener('click', postGameClick)
                })
                
                console.log('NO MATCH RESET GAME')
        }
        
        lookForMatches(playerChoiceMelody, solutionMelody)
}           

const postGameClick = (event) => {
        const playerBirdChoice = event.target.id

        if (playerBirdChoice === 'bird1'){
                document.getElementById('bird1') 
                cNoteAudio.play()
        }  if (playerBirdChoice === 'bird2'){
                document.getElementById('bird2') 
                dNoteAudio.play()
        } if (playerBirdChoice === 'bird3'){
                document.getElementById('bird3') 
                eNoteAudio.play()
        } if (playerBirdChoice === 'bird4'){
                document.getElementById('bird4') 
                gNoteAudio.play()
        } if (playerBirdChoice === 'bird5'){
                document.getElementById('bird5') 
                aNoteAudio.play()
        } 
}



// const playerNoteSelection = (event) => {                               
//         const pressedKey = event
        
//         if(pressedKey.key === "q") {   
//                 document.getElementById('bird1').style.filter = "grayscale(100%)"  
//                 playerChoiceMelody.push('c')
//                 // const quarterNote = document.createElement('img')
//                 // quarterNote.src = 'quarternote.png'
//                 // quarterNote.classList.add('note-c')
//                 // document.querySelector('.middle-row').appendChild(quarterNote)
//         }
//         if(pressedKey.key === "w"){
//                 document.getElementById('bird2').style.filter = "grayscale(100%)"
//                 playerChoiceMelody.push('d')
//         } 
//         if(pressedKey.key === "e"){
//                 document.getElementById('bird3').style.filter = "grayscale(100%)"
//                 playerChoiceMelody.push('e')
//         } 
//         if(pressedKey.key === "r"){
//                 document.getElementById('bird4').style.filter = "grayscale(100%)"
//                 playerChoiceMelody.push('g')
//         } 
//         if(pressedKey.key === "t"){
//                 document.getElementById('bird5').style.filter = "grayscale(100%)"
//                 playerChoiceMelody.push('a')
//         } 
//         if(pressedKey.key === "y"){
//                 document.getElementById('bird6').style.filter = "grayscale(100%)"
//                 playerChoiceMelody.push('high c')
//         } 
//         if (lookForMatches(playerChoiceMelody, solutionMelody)===true){
//                 //stop gameplay and display winner
//                 console.log('WE HAVE A WINNER')

//         } else if (playerChoiceMelody.length === solutionMelody.length && lookForMatches(playerChoiceMelody, solutionMelody)===false) {
//                // stop gameplay and ask player to reset
//                 console.log('NO MATCH RESET GAME')
//         }

        
//         console.log(playerChoiceMelody, solutionMelody)
//         lookForMatches(playerChoiceMelody, solutionMelody)
        
// }        

// document.addEventListener('keydown', playerNoteSelection)
// // document.addEventListener('keyup', playerNoteSelection)