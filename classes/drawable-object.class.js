class DrawableObject {
    x = 0;
    y = 0;
    width = 100;
    height = 100;
    img;
    imageCache = {};
    currentImage = 0;

    setImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    preloadImages(paths) {
        paths.forEach((path) => {
            let image = new Image();
            image.src = path;
            this.imageCache[path] = image;
        });
    }

    draw(ctx) {
        if (!this.img || !this.img.complete) {
            return;
        }
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}
