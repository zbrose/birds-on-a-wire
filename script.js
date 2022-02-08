
// refactor code 
// randomly generate array numbers or strings for multiple levels on next level button - sound files attached to array values
// animations for end keyboard section up and down presses
// make another level


// VARIABLES AND LISTENERS
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

// CLICK EVENT FUNCTION AND CONDITIONS    // store values in object OR switch case if statements
function clickEvent (event) {
        const playerBirdChoice = event.target.id
        let bird
        console.log(event)

        
        switch (playerBirdChoice){
         case 'bird1':
                playerChoiceMelody.push('c')
                const displayCNote = document.createElement('img')
                displayCNote.src = 'ledgerlineqnote.png' 
                displayCNote.classList.add('display-c','note','animate__animated','animate__fadeIn')
                noteInput.appendChild(displayCNote)  // set timeout
                cNoteAudio.currentTime=0
                cNoteAudio.play()
         break
         case 'bird2':
                playerChoiceMelody.push('d')
                const displayDNote = document.createElement('img')
                displayDNote.src = 'quarternote.png'
                displayDNote.classList.add('display-d','note','animate__animated','animate__fadeIn')
                noteInput.appendChild(displayDNote)
                dNoteAudio.currentTime=0
                dNoteAudio.play()
        break
        case 'bird3':
                playerChoiceMelody.push('e')
                const displayENote = document.createElement('img')
                displayENote.src = 'quarternote.png'
                displayENote.classList.add('display-e','note','animate__animated','animate__fadeIn')
                noteInput.appendChild(displayENote)
                eNoteAudio.currentTime=0
                eNoteAudio.play()
        break
        case 'bird4':
                playerChoiceMelody.push('g')
                const displayGNote = document.createElement('img')
                displayGNote.src = 'quarternote.png'
                displayGNote.classList.add('display-g','note','animate__animated','animate__fadeIn')
                noteInput.appendChild(displayGNote)
                gNoteAudio.currentTime=0
                gNoteAudio.play()
        break
        case 'bird5':
                playerChoiceMelody.push('a')
                const displayANote = document.createElement('img')
                displayANote.src = 'quarternote.png'
                displayANote.classList.add('display-a','note','animate__animated','animate__fadeIn')
                noteInput.appendChild(displayANote)
                aNoteAudio.currentTime=0
                aNoteAudio.play()

        }
                
        // LOOKING FOR MATCHES CONDITIONAL
        if (lookForMatches(playerChoiceMelody, solutionMelody)===true){

                
              setTimeout(function(){
                document.getElementById('correct-sound').play()
                matchDisplay.innerText = 'NICE WORK! Move on to the next level.'
                resetButton.innerText = "Next Level"
                resetButton.style.height = '5rem'
                resetButton.style.width = '15rem'
                resetButton.style.backgroundColor = 'rgb(0, 186, 243)'
                resetButton.style.color = 'white'
                resetButton.style.fontSize = '30px'
                document.querySelectorAll('.bird').forEach(bird => {
                        bird.style.filter = "grayscale(0%)"
                        bird.classList.add('animate__animated', 'animate__tada')
                 })
                }, 500)

                document.querySelectorAll('.bird').forEach(playerNoteChoice => {
                        playerNoteChoice.removeEventListener('mousedown', clickEvent)
                })
                document.querySelectorAll('.bird').forEach(playerNoteChoice => {
                        playerNoteChoice.addEventListener('mousedown', postGameClick)
                })

                
        
        } else if (playerChoiceMelody.length === solutionMelody.length && lookForMatches(playerChoiceMelody, solutionMelody)===false) {
                setTimeout(function(){
                        document.getElementById('wrong-sound').play()
                        matchDisplay.innerText = 'Shucks!  Not a match.  Try again?'
                         tryCount++
                         document.getElementById('try-count').innerText = 'Try Count: ' + tryCount
                         playerChoiceMelody = []
                         const nodeList = document.querySelectorAll('.note')
                         while (noteInput.firstChild){
                                noteInput.removeChild(noteInput.firstChild)
                         }
                         for (let i=0;i<nodeList.length;i++){
                                nodeList[i].classList.remove('.note-c','note-d','note-e','note-g','note-a')
                         }
                        },500)
         }
        
        lookForMatches(playerChoiceMelody, solutionMelody)
}           


//FINDING MATCHES BETWEEN TWO ARRAYS
function lookForMatches (arr1, arr2) {                                        
        return Array.isArray(arr1) && Array.isArray(arr2) && 
        arr1.length === arr2.length && 
        arr1.every((val, index)=> val === arr2[index])
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


//POST LEVEL PLAY FUNCTIONALITY 
const postGameClick = (event) => {
        const playerBirdChoice = event.target.id

        switch (playerBirdChoice){
        case 'bird1':
                
                cNoteAudio.currentTime=0
                cNoteAudio.play()
        break
        case 'bird2':
                
                dNoteAudio.currentTime=0
                dNoteAudio.play()
        break
        case 'bird3':
                
                eNoteAudio.currentTime=0
                eNoteAudio.play()
        break
        case 'bird4':
                
                gNoteAudio.currentTime=0
                gNoteAudio.play()
        break
        case 'bird5':
                
                aNoteAudio.currentTime=0
                aNoteAudio.play()

        }
}


// EXTRA FUN!
const keyboardInputs = (event) => {                       
        
        if(event.key === 'q') {
                cNoteAudio.currentTime=0
                cNoteAudio.play()       
        }
        if(event.key === 'w'){
                dNoteAudio.currentTime=0
                dNoteAudio.play()
        } 
        if(event.key === 'e'){
                eNoteAudio.currentTime=0
                eNoteAudio.play()
        }
        if(event.key ==='r'){
                gNoteAudio.currentTime=0 
                gNoteAudio.play()
        }
        if(event.key === 't'){
                aNoteAudio.currentTime=0
                aNoteAudio.play()
        } 
}   

document.addEventListener('keydown', keyboardInputs)
