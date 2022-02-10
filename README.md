# SEI Project 1 - Song Birds

_Song Birds_ is an educational music game that helps you improve your ear for melodies.  The player is able to control five birds, each one assigned a single musical note that sounds when you select a bird at the bottom of the screen. The object of the game is to listen to a playback of a melody and match the melody using your birds' beautiful singing voices and your own ears. 

## Technologies Used
  - DOM API
  - Logic Pro X for recorded sound
  - CSS and HTML

## Execution
  - Used DOM api for functionality 
  - Created a layout using CSS grid laying out the game display and wireframe elements
  - Created a buttons that lets the user play audio for the problem melody and notes
  - Recorded sounds using Logic X DAW and acoustic guitar/synths
  - Hook up audio playback at an event 
  - Use one row of keyboard keys to let user make musical note selections - QWERTY or the like
  - Create a musical notation display that tracks which note is played and in what order and placing the note on its corresponding note line or space
  - Keep track of conditions for winning: which notes have been hit and in what order measured with a winning combination based on the problem melody
  - If combination of user notes doesnt match order - clear player choice and start over
  - Add audio into the functionality - a line of notes for the problem melody and single notes for user bird choice
  - Display a message of note choice and if the combination of notes is correct or not 
  - Create a small display for instructions
  - Have a simple design - images of actual birds for the birds elements, hoping to animate when the user chooses respective bird and add musical note imagery
  
# Wireframe & Progress

![song birds](https://user-images.githubusercontent.com/97310057/152473456-58e32f14-0022-4c2b-b780-a639838dfe45.jpg)

![song birds finished](Images/song-birds-finished.png)

## MVP Goals Reached
  - all button functionality working
  - Displays win conditions and note choices in real time.
  - Successfully added an audio component when you click a key or button
  - Successfully tracked and execute win conditions function
  - Successfully added notes to musical staff in order produced
  - Recorded and utilized audio components

## Potential Roadblocks
  - Not being able to get audio working 
  - making game animated and fun to play
  - tracking and measuring win conditions
  - applying functionality to keys in a succinct way
  - getting musical notation to display correctly and in order of key stroke

## Stretch Goals Completed
  - Create more than one level
  - Create a landing page
  - animate birds and notes more fully
  - have animated bird celebration if user wins 
  - secret-menu item keyboard controls at QWERT

## Roadblocks and Reflections
  - Game logic was simpler than I initially thought it might be 
  - Styling for different screen sizes was challenging given the image elements
  - Hit a roadblock trying to refactor code for each click event
  - Placing notes on the staff and fixing them there was challenging

  # Ongoing goals
  -  formatting only fits browsers and the moment but would like to include mobile
  -  more levels with more diffulties and added notes or keys

## Resources
  - Bird artwork by Sarah Nelson - Instagram: @sarah_ann_nelson
  - branch sign art by Ra20Ga downloaded from similarpng.com
  - cloud background and notes png's downloaded from google images
  - Recorded sound effects by me
