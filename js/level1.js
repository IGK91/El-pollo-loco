let level1;

function createLevel1() {
    level1 = new Level(createEnemies(), createClouds(), createBackground());
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
