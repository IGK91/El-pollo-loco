class Cloud extends MovableObject {
    width = 720;
    height = 480;
    y = 0;
    speed = 0.18;
    loopWidth;

    constructor(imagePath, x, loopWidth) {
        super();
        this.setImage(imagePath);
        this.x = x;
        this.loopWidth = loopWidth;
        this.animate();
    }

    animate() {
        setInterval(() => this.drift(), 1000 / 60);
    }

    drift() {
        this.moveLeft();
        if (this.x < -this.width) {
            this.x += this.loopWidth;
        }
    }
}
