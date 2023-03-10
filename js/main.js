const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
const adistance = 32;
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
canvas.width = 32 * 15;
canvas.height = 32 * 12;

const keys = {
  d: {
    pressed: false,
  },
  a: {
    pressed: false,
  },
  w: {
    pressed: false,
  },
  s: {
    pressed: false,
  },
};

var map = new Scenario({
  image: {
    background: { src: "images/maps/background.png", imageFram: 1 },
  },
  element: c,
  aDistance: adistance,
});
var backgrounmd = new GameObject({
  position: {
    x: 0,
    y: 0,
  },
  image: {
    background: { src: "images/maps/background.png", imageFram: 1 },
  },
  element: c,
});
var hero = new User({
  position: {
    x: 0,
    y: 0,
  },
  image: {
    stand: { src: "images/characters/down.png", imageFram: 1 },
    up: { src: "images/characters/up.png", imageFram: 2 },
    down: { src: "images/characters/down.png", imageFram: 2 },
    left: { src: "images/characters/left.png", imageFram: 2 },
    right: { src: "images/characters/right.png", imageFram: 2 },
  },
  obj: {
    width: 64,
    height: 64,
    aDistance: adistance,
  },
  isControll: true,
  keys:keys,
  element: c,
});



function windowAnimation(params) {
  window.requestAnimationFrame(windowAnimation);

  backgrounmd.animation();
  hero.animation();
}

windowAnimation();



window.addEventListener("keydown", (KeyboardEvent) => {
  switch (KeyboardEvent.key) {
    case "s":
      keys.s.pressed = true;
      console.log("s");
      break;
    case "w":
      keys.w.pressed = true;
      console.log("w");
      break;
    case "a":
      keys.a.pressed = true;
      console.log("a");
      break;
    case "d":
      keys.d.pressed = true;
      console.log("d");
      break;

    default:
      break;
  }
});

window.addEventListener("keyup", (KeyboardEvent) => {
  switch (KeyboardEvent.key) {
    case "s":
      keys.s.pressed = false;
      console.log("keyup");
      break;
    case "w":
      keys.w.pressed = false;
      console.log("keyup");
      break;
    case "a":
      keys.a.pressed = false;
      console.log("keyup");
      break;
    case "d":
      keys.d.pressed = false;
      console.log("keyup");
      break;

    default:
      break;
  }
});
