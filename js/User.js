//import crt from "js/controll.js"

class User extends GameObject {
  constructor({ position, image, isControll, element, keys }) {
    super({ position, image, element, isAnimate: true });
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.keys = keys;
    this.scrollWiew = {
      x: 0,
      y: 0,
      height: 0,
      width: 0,
    };
  }

  updateStatus(i) {
    super.updateStatus(i);
  }

  update() {
    console.log("user rx:", this.position.x, "y:", this.position.y);
    if (this.keys.w.pressed) {
      this.velocity.y = 8;
      this.position.y -= this.velocity.y;
      this.currentStatus = 1;
      this.updateStatus(this.currentStatus);
      console.log( "user y:", this.position.y)
    } else if (this.keys.s.pressed) {
      this.velocity.y = 8;
      this.position.y += this.velocity.y;
      this.currentStatus = 2;
      this.updateStatus(this.currentStatus);
      console.log( "user y:", this.position.y)
    } else if (this.keys.a.pressed) {
      this.velocity.x = 8;

      if (this.position.x - this.velocity.x >= 0) {
        this.position.x -= this.velocity.x;
      } else {
        this.position.x = 0;
      }
      this.currentStatus = 3;
      super.updateStatus(this.currentStatus);
      console.log( "user x:", this.position.x)
    } else if (this.keys.d.pressed) {
      this.velocity.x = 8;

      if (this.position.x+this.width + this.velocity.x <= canvas.width) {
        this.position.x += this.velocity.x;
      } else {
        this.position.x = canvas.width-this.width;
      }

      this.currentStatus = 4;
      super.updateStatus(this.currentStatus);
      console.log( "user x:", this.position.x)
    }
  }

  animation() {
    this.update();
    super.draw()
  }
}
