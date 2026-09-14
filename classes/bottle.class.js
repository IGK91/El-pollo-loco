class Bottle extends MovableObject {
    width = 70;
    height = 80;
    y = 374;
    offset = { top: 15, right: 15, bottom: 10, left: 20 };

    IMAGES_GROUND = [
        'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        'img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
    ];

    constructor(x, variant) {
        super();
        this.setImage(this.IMAGES_GROUND[variant]);
        this.x = x;
    }
}
