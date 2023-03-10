class Scenario extends GameObject {
  constructor({ image, element }) {
    super({
      position: { x: 0, y: 0 },
      image: image,
      element: element,
      isAnimate: false,
    });
    this.c = element;
    this.c.strokeStyle = "red";

    this.width = 0;
    this.height = 0;
    this.loader = false;
    this.imgLoader = new Image(); // create a new image object
    this.imgLoader.src = image["background"].src; // set the image source
    this.imgLoader.onload = () => {
      // assign onload handler
      
      this.height = this.imgLoader.height;
      this.width = this.imgLoader.width;
      this.loader=true
      console.log("drawxy", this.width, this.height);
      
    };
   
  }
  draw() {
    
    if (!this.loader) {
      return
    }
    this.drawXY();
  }

  drawXY() {
    for (let i = 0; i < this.height; i=i + 32) {
      this.c.moveTo(i, 0);
      this.c.lineTo(i, this.height);
      this.c.stroke();
    }
    for (let i = 0; i < this.width; i=i + 32) {
      this.c.moveTo(0, i);
      this.c.lineTo(this.width, i);
      this.c.stroke();
    }
  }
}
