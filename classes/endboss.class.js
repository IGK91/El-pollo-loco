class Endboss extends MovableObject {
    width = 309;
    height = 360;
    y = 113;
    damage = 40;
    canBeStomped = false;
    offset = { top: 63, right: 12, bottom: 28, left: 22 };

    IMAGES_ALERT = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png'
    ];

    constructor(x) {
        super();
        this.preloadImages(this.IMAGES_ALERT);
        this.setImage(this.IMAGES_ALERT[0]);
        this.x = x;
        this.animate();
    }

    animate() {
        setInterval(() => this.playAnimation(this.IMAGES_ALERT), 1000 / 5);
    }
}
