# phaser-sample-app

This is a sample Phaser app to demonstrate some aminations for a poker game.

## Instructions

1. When you run this starter app, you will see a poker table at the center of the screen. Create 4 buttons under the table aligned horizontally. Button names should be as follows:

    [Deal Cards] [Bet Chips] [Get Chips] [Winner]

2. [Deal Cards]
This button will place a player on top side of the table. It deals 5 cards on the table and 2 cards for the player. Dealing cards will be animated with a proper card-dealing sound in the background. What is important is the animations and the sound effects. They must be professional looking.

3. [Bet Chips]
This button will put chips on table in an animated way. Chips will be coming from the player and will spread on the table with proper sound effects. Expecting to have a function which accepts number of chips bet on the table, the radius of the area where chips will be spred, position (x,y) of the player and the duration of this animation. Chips will be placed on the table randomly and animation should look good and realistic in physical terms. Chips can flip and hit each other while they are moving.

4. [Get Chips]
This button will do the opposite of button 3 (Bet chips). Chips on the table will be collected by the player in animated way with sound effects.

5. [Winner]
This button trigger an animation for the winner. Player will appear at the center of the screen (fade in). Background will be blurred in gray tones. Lots of chips will start falling from top to bottom of the screen. There will be a proper sound for the winner (with an applause, claps, etc..). After 3 seconds this will fade out and disappear. 


In this exercise, I am not asking to build a game but I only need to have these 5 animations/sound effects implemented.

All assets (images, sounds, sprites) will be created/provided by the artist/programmer. 

The character of the game is a bit retro looking like the images here - https://phaser.io/content/news/2020/05/herodom-open-source-spritesheet-generator.png
Not too much, just a bit.


## How to Run

- Clone the repo
- npm install -g http-server
- http-server -c-1
- Go localhost:8080