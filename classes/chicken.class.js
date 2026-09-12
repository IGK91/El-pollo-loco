class Chicken extends MovableObject {
    width = 75;
    height = 75;
    y = 378;
    damage = 20;
    canBeStomped = true;
    offset = { top: 4, right: 3, bottom: 8, left: 3 };

    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    IMAGE_DEAD = 'img/3_enemies_chicken/chicken_normal/2_dead/dead.png';

    constructor(x) {
        super();
        this.initImages();
        this.x = x;
        this.speed = 0.4 + Math.random() * 0.5;
        this.animate();
    }

    initImages() {
        this.preloadImages(this.IMAGES_WALKING);
        this.preloadImages([this.IMAGE_DEAD]);
        this.setImage(this.IMAGES_WALKING[0]);
    }

    animate() {
        setInterval(() => this.walk(), 1000 / 60);
        setInterval(() => this.playWalkAnimation(), 1000 / 7);
    }

    walk() {
        if (this.isDead()) {
            return;
        }
        this.moveLeft();
    }

    playWalkAnimation() {
        if (this.isDead()) {
            return;
        }
        this.playAnimation(this.IMAGES_WALKING);
    }

    die() {
        this.energy = 0;
        this.img = this.imageCache[this.IMAGE_DEAD];
    }
}
