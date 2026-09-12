class World {
    canvas;
    ctx;
    keyboard;
    level;
    character = new Character();
    cameraX = 0;

    constructor(canvas, keyboard) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.keyboard = keyboard;
        this.level = createLevel1();
        this.character.world = this;
        this.character.animate();
        this.startCollisionCheck();
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.cameraX, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addToMap(this.character);
        this.drawDebugBoxes();
        this.ctx.translate(-this.cameraX, 0);
        requestAnimationFrame(() => this.draw());
    }

    startCollisionCheck() {
        setInterval(() => this.checkCollisions(), 1000 / 40);
    }

    checkCollisions() {
        if (this.character.isDead()) {
            return;
        }
        this.level.enemies.forEach((enemy) => this.checkEnemy(enemy));
    }

    checkEnemy(enemy) {
        if (enemy.isDead()) {
            return;
        }
        if (enemy.canBeStomped && this.character.isStomping(enemy)) {
            this.stompEnemy(enemy);
        } else if (this.character.isColliding(enemy)) {
            this.hurtCharacter(enemy);
        }
    }

    hurtCharacter(enemy) {
        if (this.character.isHurt()) {
            return;
        }
        this.character.hit(enemy.damage);
    }

    stompEnemy(enemy) {
        enemy.die();
        this.character.speedY = 18;
    }

    drawDebugBoxes() {
        if (!showHitboxes) {
            return;
        }
        this.level.enemies.forEach((enemy) => this.drawBoxes(enemy));
        this.drawBoxes(this.character);
    }

    drawBoxes(object) {
        object.drawFrame(this.ctx);
        object.drawHitbox(this.ctx);
    }

    addObjectsToMap(objects) {
        objects.forEach((object) => this.addToMap(object));
    }

    addToMap(object) {
        if (object.otherDirection) {
            this.flipImage(object);
        }
        object.draw(this.ctx);
        if (object.otherDirection) {
            this.flipImageBack(object);
        }
    }

    flipImage(object) {
        this.ctx.save();
        this.ctx.translate(object.width, 0);
        this.ctx.scale(-1, 1);
        object.x = object.x * -1;
    }

    flipImageBack(object) {
        object.x = object.x * -1;
        this.ctx.restore();
    }
}
