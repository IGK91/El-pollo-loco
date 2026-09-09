class MovableObject extends DrawableObject {
    speed = 8;
    speedY = 0;
    acceleration = 2.5;
    groundY = 0;

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            } else {
                this.y = this.groundY;
                this.speedY = 0;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        return this.y < this.groundY;
    }

    jump() {
        this.speedY = 30;
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    playAnimation(images) {
        let index = this.currentImage % images.length;
        this.img = this.imageCache[images[index]];
        this.currentImage++;
    }
}
