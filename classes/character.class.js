class Character extends MovableObject {
    width = 145;
    height = 285;
    x = 60;
    y = 160;
    groundY = 160;
    speed = 8;
    world;

    IMAGES_IDLE = [
        'img/2_character_pepe/1_idle/idle/I-1.png',
        'img/2_character_pepe/1_idle/idle/I-2.png',
        'img/2_character_pepe/1_idle/idle/I-3.png',
        'img/2_character_pepe/1_idle/idle/I-4.png',
        'img/2_character_pepe/1_idle/idle/I-5.png',
        'img/2_character_pepe/1_idle/idle/I-6.png',
        'img/2_character_pepe/1_idle/idle/I-7.png',
        'img/2_character_pepe/1_idle/idle/I-8.png',
        'img/2_character_pepe/1_idle/idle/I-9.png',
        'img/2_character_pepe/1_idle/idle/I-10.png'
    ];

    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'
    ];

    IMAGES_JUMPING = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png'
    ];

    constructor() {
        super();
        this.preloadImages(this.IMAGES_IDLE);
        this.preloadImages(this.IMAGES_WALKING);
        this.preloadImages(this.IMAGES_JUMPING);
        this.setImage(this.IMAGES_IDLE[0]);
    }

    animate() {
        this.applyGravity();
        setInterval(() => this.handleInput(), 1000 / 60);
        setInterval(() => this.playCurrentAnimation(), 100);
    }

    handleInput() {
        if (this.world.keyboard.RIGHT && this.x < this.world.level.endX) {
            this.walkRight();
        }
        if (this.world.keyboard.LEFT && this.x > -80) {
            this.walkLeft();
        }
        if (this.world.keyboard.SPACE && !this.isAboveGround()) {
            this.jump();
        }
        this.world.cameraX = -this.x + 80;
    }

    walkRight() {
        this.moveRight();
        this.otherDirection = false;
    }

    walkLeft() {
        this.moveLeft();
        this.otherDirection = true;
    }

    playCurrentAnimation() {
        if (this.isAboveGround()) {
            this.playAnimation(this.IMAGES_JUMPING);
        } else if (this.world.keyboard.LEFT || this.world.keyboard.RIGHT) {
            this.playAnimation(this.IMAGES_WALKING);
        } else {
            this.playAnimation(this.IMAGES_IDLE);
        }
    }
}
