class Obama {
  _image;
  _x;
  _y;
  _speedX = 1;
  _speedY = 1;

  constructor(x, y, speedX, speedY) {
    // console.log("We've loaded Obama!");
    // console.log(x, y);

    this._x = x;
    this._y = y;

    if (speedX !== undefined) {
      this._speedX = speedX;
    }

    if (speedY !== undefined) {
      this._speedY = speedY;
    }

    this.loadImages();
  }

  loadImages() {
    this._image = new Image();
    // this.image.onload = function() {
    //   this.draw();
    // };
    this._image.onload = () => {
      this.draw();
    };
    this._image.src = './assets/img/obama.png';
  }

  draw() {
    ctx.beginPath();
    //  drawImage(image, dx, dy, dWidth, dHeight);
    ctx.drawImage(this._image, this._x, this._y, 100, 100);
  }

  move() {
    if (this._y <= 0) {
      this._speedY *= -1;
    }

    if (this._y + 100 >= canvas.height) {
      this._speedY *= -1;
    }

    if (this._x <= 0) {
      this._speedX *= -1;
    }

    if (this._x + 100 >= canvas.width) {
      this._speedX *= -1;
    }

    this._x += this._speedX;
    this._y += this._speedY;
  }

  tick() {
    this.move();
    this.draw();
  }
}
