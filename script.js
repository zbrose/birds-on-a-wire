
// VARIABLES AND LISTENERS ---------------------------------------------------->
let easyMelody = ['c','e','d','g']
let playerChoiceMelody = []
let tryCount = 0
let levelCount = 1
const birds = document.querySelectorAll('.bird')
const noteInput =  document.querySelector('.note-input')
const resetButton = document.getElementById('reset-button')
let matchDisplay = document.getElementById('instructions')
const originalIntructions = "Press the 'play/repeat melody' button and listen carefully to the melody.  Then, click on your birds to match the melody's pitches!"
const cNoteAudio = document.getElementById('c-note') 
const dNoteAudio = document.getElementById('d-note') 
const eNoteAudio = document.getElementById('e-note') 
const gNoteAudio = document.getElementById('g-note') 
const aNoteAudio = document.getElementById('a-note')

const playRelativePitch = document.getElementById('play-relative').addEventListener('mousedown',()=>{
                document.getElementById('relative-pitch').play()})

const playerNoteChoices = document.querySelectorAll('.bird').forEach(playerNoteChoice => {
        playerNoteChoice.addEventListener('mousedown', clickEvent)
 })

const container = document.querySelector('.container')
container.style.visibility = 'hidden'
const heading = document.querySelector('h1')
heading.style.visibility = 'visible'

const startButton = document.querySelector('.start-button')
const gameStart = () => {
        document.querySelector('body').removeChild(startButton)
        container.style.visibility = 'visible'
        container.classList.add('animate__animated', 'animate__fadeIn')
        document.getElementById('start-music').play()
        
}
startButton.addEventListener('click',gameStart)

function playLevelOneMelody () {
       document.getElementById('melody').play()
}
document.getElementById('play-melody').addEventListener('mousedown',playLevelOneMelody)



// CLICK EVENT FUNCTION AND CONDITIONS ---------------------------------------------------->
function clickEvent (event) {
        const playerBirdChoice = event.target.id
        switch (playerBirdChoice){
         case 'bird1':
                playerChoiceMelody.push('c')
                const displayCNote = document.createElement('img')
                displayCNote.src = 'ledgerlineqnote.png' 
                displayCNote.classList.add('display-c','note','animate__animated','animate__fadeIn')
                noteInput.appendChild(displayCNote)
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
                
        // LOOKING FOR MATCHES CONDITIONAL---------------------------------------------------->
        if (lookForMatches(playerChoiceMelody, easyMelody)===true && levelCount === 1){

                
              setTimeout(function(){
                document.getElementById('correct-sound').play()
                matchDisplay.innerText = 'NICE WORK! Move on to the next level.'
                resetButton.classList.add('reset-button-transform')
                resetButton.innerText = "Next Level"
                birds.forEach(bird => {
                        bird.style.filter = "grayscale(0%)"
                        bird.classList.add('animate__animated', 'animate__tada')
                 })
                }, 500)

                birds.forEach(playerNoteChoice => {
                        playerNoteChoice.removeEventListener('mousedown', clickEvent)
                })
                birds.forEach(playerNoteChoice => {
                        playerNoteChoice.addEventListener('mousedown', postGameClick)
                })

                
        
        } else if (lookForMatches(playerChoiceMelody, easyMelody)===true && levelCount === 2){
                birds.forEach(playerNoteChoice => {
                        playerNoteChoice.removeEventListener('mousedown', clickEvent)
                })
                birds.forEach(playerNoteChoice => {
                        playerNoteChoice.addEventListener('mousedown', postGameClick)
                })
                
                setTimeout(function(){
                  document.getElementById('correct-sound').play()
                  matchDisplay.innerText = "YOU'RE THE MELODY MASTER! Thanks for playing."
                  resetButton.classList.add('reset-button-transform')
                  resetButton.innerText = "More Levels Coming Soon"
                  birds.forEach(bird => {
                          bird.style.filter = "grayscale(0%)"
                          bird.classList.add('animate__animated', 'animate__tada')
                   })
                  }, 500)
                  
          
          } else if (playerChoiceMelody.length === easyMelody.length && lookForMatches(playerChoiceMelody, easyMelody)===false) {
                setTimeout(function(){
                        document.getElementById('wrong-sound').play()
                        matchDisplay.innerText = 'Shucks!  Not a match.  Try again?'
                        tryCount++
                        document.getElementById('try-count').innerText = 'Try Count: ' + tryCount
                        playerChoiceMelody = []
                        while (noteInput.firstChild) noteInput.removeChild(noteInput.firstChild)
                        },500)
         }
        
        lookForMatches(playerChoiceMelody, easyMelody)
}           


//FINDING MATCHES BETWEEN TWO ARRAYS ---------------------------------------------------->
function lookForMatches (arr1, arr2) {                                        
        return Array.isArray(arr1) && Array.isArray(arr2) && 
        arr1.length === arr2.length && 
        arr1.every((val, index)=> val === arr2[index])
}


//GAME RESET FUNCTION ---------------------------------------------------->
const gameReset = () =>{
        while (noteInput.firstChild) noteInput.removeChild(noteInput.firstChild)
        
        //GAME RESET BLOCK 
        if (resetButton.innerText === 'Reset'){
                 birds.forEach(playerNoteChoice => playerNoteChoice.addEventListener('mousedown', clickEvent))
                document.getElementById('try-count').innerText = 'Try Count: ' + tryCount
                playerChoiceMelody = []
                matchDisplay.innerText = 'Give it another go!'
                
        } else if(resetButton.innerText === 'Next Level'){
        // NEXT LEVEL BLOCK
                birds.forEach(playerNoteChoice => playerNoteChoice.addEventListener('mousedown', clickEvent))
                resetButton.classList.remove('reset-button-transform')
                resetButton.innerText = 'Reset'
                levelCount++
                document.getElementById('level-display').innerText = 'Level: ' + levelCount
                playerChoiceMelody = []
                easyMelody = ['c','d','e','g']
                matchDisplay.innerText = originalIntructions
                document.getElementById('play-melody').removeEventListener('mousedown',playLevelOneMelody)
                document.getElementById('play-melody').addEventListener('mousedown',()=>{
                        document.getElementById('level-two-audio').play()})
                birds.forEach(bird => {
                        bird.style.filter = ''
                        bird.classList.remove('animate__animated', 'animate__tada')
                })
        } else if (resetButton.innerText === "More Levels Coming Soon"){}
}
resetButton.addEventListener('click',gameReset)


//POST LEVEL PLAY FUNCTIONALITY  ---------------------------------------------------->
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


// EXTRA FUN! --- refactor this! ---------------------------------------------------->
const keyboardInputs = (event) => {                       
        
        switch (event.key){
        case 'q':
                document.querySelector('#bird1').classList.add('animate__animated', 'animate__headShake')
                document.querySelector('#bird1').style.filter = 'grayscale(0%)'
                cNoteAudio.currentTime=0
                cNoteAudio.play()  
        break
        case 'w':
                document.querySelector('#bird2').classList.add('animate__animated', 'animate__headShake')
                document.querySelector('#bird2').style.filter = 'grayscale(0%)'
                dNoteAudio.currentTime=0
                dNoteAudio.play()  
        break
        case 'e':
                document.querySelector('#bird3').classList.add('animate__animated', 'animate__headShake')
                document.querySelector('#bird3').style.filter = 'grayscale(0%)'
                eNoteAudio.currentTime=0
                eNoteAudio.play()  
        break
        case 'r':
                document.querySelector('#bird4').classList.add('animate__animated', 'animate__headShake')
                document.querySelector('#bird4').style.filter = 'grayscale(0%)'
                gNoteAudio.currentTime=0
                gNoteAudio.play()  
        break
        case 't':
                document.querySelector('#bird5').classList.add('animate__animated', 'animate__headShake')
                document.querySelector('#bird5').style.filter = 'grayscale(0%)'
                aNoteAudio.currentTime=0
                aNoteAudio.play()  
        
        }
        console.log(event)
}   
document.addEventListener('keydown', keyboardInputs)

const keyboardDown = (event) => {                       
        
        switch (event.key){
        case 'q':
                document.querySelector('#bird1').classList.remove('animate__animated', 'animate__headShake')
                document.querySelector('#bird1').style.filter = ''
        break
        case 'w':
                document.querySelector('#bird2').classList.remove('animate__animated', 'animate__headShake')
                document.querySelector('#bird2').style.filter = ''
        break
        case 'e':
                document.querySelector('#bird3').classList.remove('animate__animated', 'animate__headShake')
                document.querySelector('#bird3').style.filter = ''
        break
        case 'r':
                document.querySelector('#bird4').classList.remove('animate__animated', 'animate__headShake')
                document.querySelector('#bird4').style.filter = '' 
        break
        case 't':
                document.querySelector('#bird5').classList.remove('animate__animated', 'animate__headShake')
                document.querySelector('#bird5').style.filter = '' 
        
        }
}   
document.addEventListener('keyup', keyboardDown)

