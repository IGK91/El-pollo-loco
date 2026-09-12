class MovableObject extends DrawableObject {
    speed = 8;
    speedY = 0;
    acceleration = 2.5;
    otherDirection = false;
    energy = 100;
    lastHit = 0;
    groundY = 0;
    offset = { top: 0, right: 0, bottom: 0, left: 0 };

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

    hitLeft() {
        return this.x + this.offset.left;
    }

    hitRight() {
        return this.x + this.width - this.offset.right;
    }

    hitTop() {
        return this.y + this.offset.top;
    }

    hitBottom() {
        return this.y + this.height - this.offset.bottom;
    }

    isColliding(other) {
        return this.hitRight() > other.hitLeft()
            && this.hitLeft() < other.hitRight()
            && this.hitBottom() > other.hitTop()
            && this.hitTop() < other.hitBottom();
    }

    isStomping(other) {
        let hitZone = other.hitTop() + (other.hitBottom() - other.hitTop()) * 0.8;
        return this.speedY < 0
            && this.hitBottom() < hitZone
            && this.isColliding(other);
    }

    hit(damage) {
        this.energy = Math.max(0, this.energy - damage);
        this.lastHit = new Date().getTime();
    }

    isHurt() {
        return (new Date().getTime() - this.lastHit) / 1000 < 0.8;
    }

    isDead() {
        return this.energy === 0;
    }
    drawHitbox(ctx) {
        ctx.strokeStyle = '#ff3b30';
        ctx.lineWidth = 2;
        ctx.strokeRect(this.hitLeft(), this.hitTop(),
            this.hitRight() - this.hitLeft(),
            this.hitBottom() - this.hitTop());
    }
}
