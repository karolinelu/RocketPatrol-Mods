class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue, specialship) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.points = pointValue;
        this.moveSpeed = game.settings.spaceshipSpeed;
        this.specialship = specialship;
    }
    //William Morales helped with the special ship
    update() {
        if (this.specialship) {
            this.x -= this.moveSpeed *2;
        }

        this.x -= this.moveSpeed;
        if(this.x <= 0 - this.width) {
            this.x = game.config.width;
        }
    }

    reset () {
        this.x = game.config.width;
    }
}