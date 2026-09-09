window.addEventListener('keydown', (event) => {
    if (event.code === 'ArrowLeft') {
        keyboard.LEFT = true;
    }
    if (event.code === 'ArrowRight') {
        keyboard.RIGHT = true;
    }
    if (event.code === 'Space') {
        keyboard.SPACE = true;
        event.preventDefault();
    }
});

window.addEventListener('keyup', (event) => {
    if (event.code === 'ArrowLeft') {
        keyboard.LEFT = false;
    }
    if (event.code === 'ArrowRight') {
        keyboard.RIGHT = false;
    }
    if (event.code === 'Space') {
        keyboard.SPACE = false;
    }
});
