class World {
    canvas;
    ctx;
    keyboard;
    level;
    character = new Character();
    cameraX = 0;
    statusBarHealth;
    statusBarCoin;
    statusBarBottle;
    totalCoins = 0;
    totalBottles = 0;

    constructor(canvas, keyboard) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.keyboard = keyboard;
        this.level = createLevel1();
        this.totalCoins = this.level.coins.length;
        this.totalBottles = this.level.bottles.length;
        this.createStatusBars();
        this.character.world = this;
        this.character.animate();
        this.startCollisionCheck();
        this.draw();
    }

    createStatusBars() {
        let health = 'img/7_statusbars/1_statusbar/2_statusbar_health/green';
        let coin = 'img/7_statusbars/1_statusbar/1_statusbar_coin/blue';
        let bottle = 'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange';
        this.statusBarHealth = new StatusBar(this.buildBarImages(health), 15, 0);
        this.statusBarCoin = new StatusBar(this.buildBarImages(coin), 15, 42);
        this.statusBarBottle = new StatusBar(this.buildBarImages(bottle), 15, 84);
        this.statusBarCoin.setPercentage(0);
        this.statusBarBottle.setPercentage(0);
    }

    buildBarImages(folder) {
        return [0, 20, 40, 60, 80, 100].map((value) => folder + '/' + value + '.png');
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.cameraX, 0);
        this.drawWorldObjects();
        this.drawDebugBoxes();
        this.ctx.translate(-this.cameraX, 0);
        this.drawStatusBars();
        requestAnimationFrame(() => this.draw());
    }

    drawWorldObjects() {
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.enemies);
        this.addToMap(this.character);
    }

    drawStatusBars() {
        this.statusBarHealth.draw(this.ctx);
        this.statusBarCoin.draw(this.ctx);
        this.statusBarBottle.draw(this.ctx);
    }

    startCollisionCheck() {
        setInterval(() => this.checkCollisions(), 1000 / 40);
    }

    checkCollisions() {
        if (this.character.isDead()) {
            return;
        }
        this.level.enemies.forEach((enemy) => this.checkEnemy(enemy));
        this.checkPickups(this.level.coins, (item) => this.collectCoin(item));
        this.checkPickups(this.level.bottles, (item) => this.collectBottle(item));
    }

    checkPickups(items, collect) {
        items.filter((item) => this.character.isColliding(item)).forEach(collect);
    }

    collectCoin(coin) {
        this.character.coins++;
        this.level.coins.splice(this.level.coins.indexOf(coin), 1);
        this.statusBarCoin.setPercentage(this.character.coins / this.totalCoins * 100);
    }

    collectBottle(bottle) {
        this.character.bottles++;
        this.level.bottles.splice(this.level.bottles.indexOf(bottle), 1);
        this.statusBarBottle.setPercentage(this.character.bottles / this.totalBottles * 100);
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
        this.statusBarHealth.setPercentage(this.character.energy);
    }

    stompEnemy(enemy) {
        enemy.die();
        this.character.speedY = 18;
    }

    drawDebugBoxes() {
        if (!showHitboxes) {
            return;
        }
        this.level.enemies.forEach((object) => this.drawBoxes(object));
        this.level.coins.forEach((object) => this.drawBoxes(object));
        this.level.bottles.forEach((object) => this.drawBoxes(object));
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
