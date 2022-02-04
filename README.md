# SEI Project 1 - Song Birds

_Song Birds_ is an educational music game that helps you improve your ear for melodies.  The player is able to control six birds on a wire and each one  is assigned a single musical note. The object of the game is to listen to a distant birds' melody of three to five notes and match the melody using your birds' beautiful singing voices.  In order to move onto the next level, players must match the order of musical notes in the distant birds melody using their ears.  

## Technical Plan
  - Use DOM api for functionality 
  - Create a layout using CSS grid laying out the game display and wireframe elements
  - Create a button that lets the user play the level 1 bird call for reference 
  - Create an instructions page at the game start
  - Hook up audio playback at an event
  - Use one row of keyboard keys to let user make musical note selections - QWERTY or the like
  - Create a musical notation display that tracks which note is played and in what order and placing the note on its corresponding note line or space
  - Keep track of conditions for winning: which notes have been hit and in what order measured with a winning combination based on the inital bird call
  - If combination of user notes doesnt match order - clear player choice and start over
  - Add audio into the functionality - a line of 3 notes for the intital bird call and single notes for user bird choice
  - Display a message of note choice and if the combination of notes is correct or not 
  - Create a small display for control instructions
  - Have a simple design - images of actual birds for the birds elements, hoping to animate when the user chooses respective bird and add musical note imagery
  
# Wireframes
  
![song bird wireframe](file:///Users/zachbrose/Downloads/song%20birds%20.jpg)

## MPV Goals
  - Get all button functionality working
  - Display correct combo or win conditions and note choices in real time.
  - Successfully have an audio component when you click a key or button
  - Successfully track and execute win conditions function

## Stretch Goals
  - Create more than one level
  - Create a landing page
  - Add birds chirping background audio throughout the game
  - animate birds and notes more fully
  - have animated bird celebration if user wins 
  - create generative cloud background making clouds pass by

## Potential Roadblocks
  - Not being able to get audio working 
  - making game animated and fun to play
  - tracking and measuring win conditions
  - applying functionality to keys in a succinct way
  - getting musical notation to display correctly and in order of key stroke
