class Coin extends MovableObject {
    width = 120;
    height = 120;
    offset = { top: 39, right: 39, bottom: 39, left: 39 };

    IMAGES_SHINE = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png'
    ];

    constructor(x, y) {
        super();
        this.setImage(this.IMAGES_SHINE[0]);
        this.preloadImages(this.IMAGES_SHINE);
        this.x = x;
        this.y = y;
        this.animate();
    }

    animate() {
        setInterval(() => this.playAnimation(this.IMAGES_SHINE), 1000 / 2);
    }
}
