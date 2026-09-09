class Character extends MovableObject {
    width = 145;
    height = 285;
    x = 60;
    y = 160;
    groundY = 160;
    speed = 8;

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
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImage(this.IMAGES_IDLE[0]);
    }

    animate() {
        this.applyGravity();
        setInterval(() => this.handleInput(), 1000 / 60);
        setInterval(() => this.playCurrentAnimation(), 100);
    }

    handleInput() {
        if (keyboard.RIGHT) {
            this.moveRight();
        }
        if (keyboard.LEFT) {
            this.moveLeft();
        }
        if (keyboard.SPACE && !this.isAboveGround()) {
            this.jump();
        }
    }

    playCurrentAnimation() {
        if (this.isAboveGround()) {
            this.playAnimation(this.IMAGES_JUMPING);
        } else if (keyboard.LEFT || keyboard.RIGHT) {
            this.playAnimation(this.IMAGES_WALKING);
        } else {
            this.playAnimation(this.IMAGES_IDLE);
        }
    }
}
