class GameObject extends Sprite {
  constructor({ position, image, element, isAnimate,aDistance }) {
    super({ position, image, isAnimate, element });
    this.position = {
      x: position.x,
      y: position.y,
    };
    this.colliction = {
      x: 0,
      y: 0,
      width: super.width,
      height: super.height,
    };
    
    this.IsUserControl = false;
    this.c = element;
    //this.isAnimate = isAnimate;

    this.keyPress = {
      left: false,
      right: false,
      down: false,
      up: false,
    };

    this.currentStatus = 0;
  }

  
  draw() {
    // this.c.fillStyle = "red";
    // this.c.fillRect(this.position.x, this.position.y, this.width, this.height);
    super.draw();
  }

  update() {
    console.log("x:", this.position.x, "y:", this.position.y);
    
    this.collictionCheck()
    this.collictionHitbox();
    this.draw();
  }

  animation() {
    this.update();
    this.draw();
    // requestAnimationFrame(() => this.animation);

    // this.c.clearRect(0, 0, canvas.height, canvas.width);
  }

  //圖片 左上角為 0,0 '起始位置
  collictionHitbox() {
    this.c.fillStyle = "rgba(255,0,0,0.5)";
    this.c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  collictionCheck(){

  }
  collictionRet(){
    return
  }
  collictionRadar(){

  }

  objInfo(){
    return {position:this.position}
  }
}
