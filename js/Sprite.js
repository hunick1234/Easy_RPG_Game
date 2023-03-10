class Sprite {
  constructor({ position, image, isAnimate, element }) {
    this.position = position;
    this.isAnimate = isAnimate || false;

    this.fps = 5;
    this.fpsInterval = 1000 / this.fps;
    this.then = Date.now();
    this.startTime = this.then;

    this.height;
    this.width;
    //this.image = new Image();

    this.imgArray = new Array();
    Object.keys(image).forEach((key, i) => {
      console.log("image load",key);
      this.imgArray[i] = new Image();
      this.imgArray[i].src = image[key].src;
      this.imgArray[i].crossOrigin = "anonymous";
      this.imgArray[i].imageFram = image[key].imageFram;
      // this.height = this.imgArray[i].height;
      // this.width = this.imgArray[i].width / this.imgArray[i].imageFram;
    });

    this.imgArray[Object.keys(image).length - 1].onload = () => {
      this.imgOnload = true;
      this.height = this.imgArray[Object.keys(image).length - 1].height;
      this.width =
        this.imgArray[Object.keys(image).length - 1].width /
        this.imgArray[Object.keys(image).length - 1].imageFram;
      
    };
   // this.c = element;
    this.currentFrame = 0;
    this.currentStatus = 0;
    this.fram = this.imgArray[this.currentStatus].imageFram;
    // this.status={
    //   stop:0
    //   up:1,
    //   down:2,
    //   left:3,
    //   right:4,
    //
    // }
  }

  draw() {
    if (!this.imgOnload) {
      return;
    }
    // this.c.fillStyle = "red";
    //this.c.fillRect(this.position.x, this.position.y, this.width, this.height);
    c.drawImage(
     this.imgArray[this.currentStatus],
      this.width * this.currentFrame,
      0,
      this.width,
      this.height,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
      this.updateFrame()
   
  }
  updateFrame() {
    

    let now = Date.now();
    let elapsed = now - this.then;

    if (elapsed > this.fpsInterval) {
      this.then = now - (elapsed % this.fpsInterval);

      // Put your drawing code here

      if (this.fram - 1 > this.currentFrame) {
        this.currentFrame++;
      } else {
        this.currentFrame = 0;
      }
    }
  }
  updateStatus(i) {
    if (this.isAnimate) {
      this.currentStatus = i;
      this.currentFrame = 0;
      this.fram = this.imgArray[this.currentStatus].imageFram;
    }
  }
  animation() {
    this.draw()
    requestAnimationFrame(()=>this.animation);
    console.log("splite")
  }
}
