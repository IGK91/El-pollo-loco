class SmallChicken extends Chicken {
    width = 56;
    height = 50;
    y = 400;
    damage = 10;
    offset = { top: 4, right: 6, bottom: 5, left: 6 };

    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];

    IMAGE_DEAD = 'img/3_enemies_chicken/chicken_small/2_dead/dead.png';

    constructor(x) {
        super(x);
        this.initImages();
        this.speed = 0.9 + Math.random() * 0.6;
    }
}
