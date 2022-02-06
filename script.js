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
// const notationDisplay = document.getElementById('notation-display')
const noteInput =  document.querySelector('.note-input')
const resetButton = document.getElementById('reset-button')
const matchDisplay = document.getElementById('instructions')
const cNote = document.createElement('img')
cNote.src = 'ledgerlineqnote.png'
const dNote = document.createElement('img')
dNote.src = 'quarternote.png'
const eNote = document.createElement('img')
eNote.src = 'quarternote.png'
const gNote = document.createElement('img')
gNote.src = 'quarternote.png'
const aNote = document.createElement('img')
aNote.src = 'quarternote.png'


function lookForMatches (arr1, arr2) {                                        
        return Array.isArray(arr1) && Array.isArray(arr2) && 
        arr1.length === arr2.length && 
        arr1.every((val, index)=> val === arr2[index])
}

const gameReset = () =>{
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
        console.log('reset')
}


resetButton.addEventListener('click',gameReset)

const playerNoteChoices = document.querySelectorAll('.bird').forEach(playerNoteChoice => 
    {playerNoteChoice.addEventListener('click',(event)=>{

        const playerBirdChoice = event.target.id

        if (playerBirdChoice === 'bird1'){
                document.getElementById('bird1') 
                playerChoiceMelody.push('c')
                // const cNote = document.createElement('img')
                // cNote.src = 'ledgerlineqnote.png'
                cNote.classList.add('note-c','note')
                noteInput.appendChild(cNote)
        }  if (playerBirdChoice === 'bird2'){
                document.getElementById('bird2') 
                playerChoiceMelody.push('d')
                // const dNote = document.createElement('img')
                // dNote.src = 'quarternote.png'
                dNote.classList.add('note-d','note')
                noteInput.appendChild(dNote)
        } if (playerBirdChoice === 'bird3'){
                document.getElementById('bird3') 
                playerChoiceMelody.push('e')
                // const eNote = document.createElement('img')
                // eNote.src = 'quarternote.png'
                eNote.classList.add('note-e','note')
                noteInput.appendChild(eNote)
        } if (playerBirdChoice === 'bird4'){
                document.getElementById('bird4') 
                playerChoiceMelody.push('g')
                // const gNote = document.createElement('img')
                // gNote.src = 'quarternote.png'
                gNote.classList.add('note-g','note')
                noteInput.appendChild(gNote)
        } if (playerBirdChoice === 'bird5'){
                document.getElementById('bird5') 
                playerChoiceMelody.push('a')
                // const aNote = document.createElement('img')
                // aNote.src = 'quarternote.png'
                aNote.classList.add('note-a','note')
                noteInput.appendChild(aNote)
        } 
        if (lookForMatches(playerChoiceMelody, solutionMelody)===true){
                matchDisplay.innerText = 'WOOP! YOUR EARS ARE LOOKING BIGGER ALREADY!'
                console.log('WE HAVE A WINNER')
        
        } else if (playerChoiceMelody.length === solutionMelody.length && lookForMatches(playerChoiceMelody, solutionMelody)===false) {
                matchDisplay.innerText = 'Shucks!  Not a match.  Try again?'
                console.log('NO MATCH RESET GAME')
        }
        
        lookForMatches(playerChoiceMelody, solutionMelody)
})})


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