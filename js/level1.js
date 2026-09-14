let level1;

function createLevel1() {
    level1 = new Level(createEnemies(), createClouds(), createBackground(), createCoins(), createBottles());
    return level1;
}

function createEnemies() {
    return [
        new Chicken(520),
        new Chicken(880),
        new Chicken(1350),
        new Chicken(1900),
        new SmallChicken(700),
        new SmallChicken(1150),
        new SmallChicken(1700),
        new SmallChicken(2150),
        new Endboss(2750)
    ];
}

function createClouds() {
    let clouds = [];
    let count = 6;
    let loopWidth = 719 * count;
    for (let index = -1; index < count - 1; index++) {
        let variant = index % 2 === 0 ? '2' : '1';
        clouds.push(new Cloud('img/5_background/layers/4_clouds/' + variant + '.png', 719 * index, loopWidth));
    }
    return clouds;
}

function createBackground() {
    let objects = [];
    for (let index = -1; index < 5; index++) {
        objects = objects.concat(createBackgroundSegment(index));
    }
    return objects;
}

function createBackgroundSegment(index) {
    let x = 719 * index;
    let variant = index % 2 === 0 ? '2' : '1';
    return [
        new BackgroundObject('img/5_background/layers/air.png', x),
        new BackgroundObject('img/5_background/layers/3_third_layer/' + variant + '.png', x),
        new BackgroundObject('img/5_background/layers/2_second_layer/' + variant + '.png', x),
        new BackgroundObject('img/5_background/layers/1_first_layer/' + variant + '.png', x)
    ];
}

function createCoins() {
    return [
        new Coin(560, 240),
        new Coin(645, 195),
        new Coin(730, 165),
        new Coin(815, 195),
        new Coin(900, 240),
        new Coin(1300, 205),
        new Coin(1385, 165),
        new Coin(1470, 205),
        new Coin(1950, 185),
        new Coin(2120, 235)
    ];
}

function createBottles() {
    return [
        new Bottle(380, 0),
        new Bottle(760, 1),
        new Bottle(1050, 0),
        new Bottle(1240, 1),
        new Bottle(1520, 0),
        new Bottle(1820, 1),
        new Bottle(2050, 0),
        new Bottle(2280, 1),
        new Bottle(2420, 0)
    ];
}
