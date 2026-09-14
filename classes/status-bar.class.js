class StatusBar extends DrawableObject {
    width = 200;
    height = 55;
    percentage = 100;
    images = [];

    constructor(images, x, y) {
        super();
        this.images = images;
        this.preloadImages(images);
        this.x = x;
        this.y = y;
        this.setPercentage(100);
    }

    setPercentage(percentage) {
        this.percentage = Math.min(100, Math.max(0, percentage));
        this.img = this.imageCache[this.images[this.resolveImageIndex()]];
    }

    resolveImageIndex() {
        return Math.round(this.percentage / 20);
    }
}
