//Mods 
//Create a new spaceship type (with new artwork) that's smaller, moves faster, and is worth more points
//Create new artwork for all of the in-game assets (rocket, spaceships, explosion)
//Create a new tile sprite for the background
//Allow the player to control the rocket after it's fired
//Create 4 new explosion SFX and randomize which one plays on impact
//Implement a simultaneous two-player mode
//Create a new title screen



let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ] 
}
let game = new Phaser.Game(config);
let keyF, keyR, keyLEFT, keyRIGHT;
let keyA, keyD, keyW;
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
 