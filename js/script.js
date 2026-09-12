let canvas;
let world;
let keyboard = new Keyboard();
let showHitboxes = false;

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

init();
