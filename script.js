
// create a Bird object instance and run it for each click?
// refactor code 
// randomly generate array numbers or strings for multiple levels on next level button - sound files attached to array values
// add keyboard fun to bottom section


let solutionMelody = ['c','e','d','g'] 
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

const playMelody = document.getElementById('play-melody').addEventListener('mousedown',()=>{
        document.getElementById('melody').play()})
const playRelativePitch = document.getElementById('play-relative').addEventListener('mousedown',()=>{
                document.getElementById('relative-pitch').play()})
const playerNoteChoices = document.querySelectorAll('.bird').forEach(playerNoteChoice => {
        playerNoteChoice.addEventListener('mousedown', clickEvent)
 })

 const birdObject = [
         {}
 ]
                
// class Bird  {
//         constructor (id, number, note ){
//                 this.id = id
//                 this.number = number
//                 this.note = note
//         }
//         clickEvent(){
                
//                 console.log('clicked!')
//         }
// }

// const birdOne = new Bird ('bird',1,'c')
// birdOne.clickEvent()

// CLICK EVENT FUNCTION AND CONDITIONS
function clickEvent (event) {
        const playerBirdChoice = event.target.id

        if (playerBirdChoice === 'bird1'){
                playerChoiceMelody.push('c')
                const displayCNote = document.createElement('img')
                displayCNote.src = 'ledgerlineqnote.png'
                displayCNote.classList.add('display-c','note')
                noteInput.appendChild(displayCNote)
                cNoteAudio.currentTime=0
                cNoteAudio.play()
        }  if (playerBirdChoice === 'bird2'){
                playerChoiceMelody.push('d')
                const displayDNote = document.createElement('img')
                displayDNote.src = 'quarternote.png'
                displayDNote.classList.add('display-d','note')
                noteInput.appendChild(displayDNote)
                dNoteAudio.play()
        } if (playerBirdChoice === 'bird3'){
                playerChoiceMelody.push('e')
                const displayENote = document.createElement('img')
                displayENote.src = 'quarternote.png'
                displayENote.classList.add('display-e','note')
                noteInput.appendChild(displayENote)
                eNoteAudio.play()
        } if (playerBirdChoice === 'bird4'){ 
                playerChoiceMelody.push('g')
                const displayGNote = document.createElement('img')
                displayGNote.src = 'quarternote.png'
                displayGNote.classList.add('display-g','note')
                noteInput.appendChild(displayGNote)
                gNoteAudio.play()
        } if (playerBirdChoice === 'bird5'){
                playerChoiceMelody.push('a')
                const displayANote = document.createElement('img')
                displayANote.src = 'quarternote.png'
                displayANote.classList.add('display-a','note')
                noteInput.appendChild(displayANote)
                aNoteAudio.play()
        } 

        // LOOKING FOR MATCHES CONDITIONAL
        if (lookForMatches(playerChoiceMelody, solutionMelody)===true){
                matchDisplay.innerText = 'NICE WORK! Move on to the next level.'
                resetButton.innerText = "Next Level"
                resetButton.style.height = '5rem'
                resetButton.style.width = '15rem'
                resetButton.style.backgroundColor = 'rgb(0, 186, 243)'
                resetButton.style.color = 'white'
                resetButton.style.fontSize = '30px'

                document.querySelectorAll('.bird').forEach(playerNoteChoice => {
                        playerNoteChoice.removeEventListener('mousedown', clickEvent)
                })
                document.querySelectorAll('.bird').forEach(playerNoteChoice => {
                        playerNoteChoice.addEventListener('mousedown', postGameClick)
                })
        
        } else if (playerChoiceMelody.length === solutionMelody.length && lookForMatches(playerChoiceMelody, solutionMelody)===false) {
                matchDisplay.innerText = 'Shucks!  Not a match.  Try again?'
                document.querySelectorAll('.bird').forEach(playerNoteChoice => {
                        playerNoteChoice.removeEventListener('mousedown', clickEvent)
                })
                document.querySelectorAll('.bird').forEach(playerNoteChoice => {
                        playerNoteChoice.addEventListener('mousedown', postGameClick)
                })
                
        }
        
        lookForMatches(playerChoiceMelody, solutionMelody)
}           

//FINING MATCHES BETWEEN TWO ARRAYS
function lookForMatches (arr1, arr2) {                                        
        return Array.isArray(arr1) && Array.isArray(arr2) && 
        arr1.length === arr2.length && 
        arr1.every((val, index)=> val === arr2[index])
}

//POST GAME FUNCTIONALITY 
const postGameClick = (event) => {
        const playerBirdChoice = event.target.id

        if (playerBirdChoice === 'bird1'){
                cNoteAudio.currentTime=0
                cNoteAudio.play()
        }  if (playerBirdChoice === 'bird2'){
                dNoteAudio.currentTime=0
                dNoteAudio.play()
        } if (playerBirdChoice === 'bird3'){
                eNoteAudio.currentTime=0
                eNoteAudio.play()
        } if (playerBirdChoice === 'bird4'){
                gNoteAudio.currentTime=0 
                gNoteAudio.play()
        } if (playerBirdChoice === 'bird5'){
                aNoteAudio.currentTime=0
                aNoteAudio.play()
        } 
}

//GAME RESET FUNCTION
const gameReset = () =>{
        if (resetButton.innerText === 'Reset'){
         document.querySelectorAll('.bird').forEach(playerNoteChoice => {
        playerNoteChoice.addEventListener('mousedown', clickEvent)
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

// EXTRA FUN!
document.addEventListener('keydown', e => pressedKeys[e.key] = true)
document.addEventListener('keyup', e => pressedKeys[e.key] = false)
const pressedKeys = {}


const keyboardInputs = () => {                       
        
        if(pressedKeys.q) { 
               cNoteAudio.currentTime=0
               cNoteAudio.play()
        }
         if(pressedKeys.w){
                dNoteAudio.currentTime=0
                dNoteAudio.play()
        } 
        if(pressedKeys.e){
                eNoteAudio.currentTime=0
                eNoteAudio.play()
        }
        if(pressedKeys.r){
                gNoteAudio.currentTime=0 
                gNoteAudio.play()
        }
        if(pressedKeys.t){
                aNoteAudio.currentTime=0
                aNoteAudio.play()
        } 
}   

keyboardInputs()
// document.addEventListener('keydown', keyboardInputs)
// // document.addEventListener('keyup', playerNoteSelection)
