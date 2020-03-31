class Obama {
  image;
  x;
  y;

  constructor(theX, theY) {
    console.log("We've loaded Obama!");
    console.log(theX, theY);

    this.x = theX;
    this.y = theY;

    this.loadImages();
  }

  loadImages() {
    this.image = new Image();
    // this.image.onload = function() {
    //   this.draw();
    // };
    this.image.onload = () => {
      this.draw();
    };
    this.image.src = './assets/img/obama.png';
  }

  draw() {
    ctx.beginPath();
    //  drawImage(image, dx, dy, dWidth, dHeight);
    ctx.drawImage(this.image, 100, 100, 100, 100);
  }
}
