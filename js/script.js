let canvas;
let ctx;
let keyboard = new Keyboard();
let character = new Character();

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    character.animate();
    draw();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGround();
    character.draw(ctx);
    requestAnimationFrame(draw);
}

function drawGround() {
    ctx.fillStyle = '#c8a165';
    ctx.fillRect(0, 445, canvas.width, canvas.height - 445);
}

init();
