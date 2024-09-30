let colorlist = ['gold', 'yellow', 'turquoise', 'red']
let timer = 0
let delayTime = 2000
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  fill("green")
  triangle(30, 75, 58, 20, 86, 75);
  if (millis()-timer > delayTime){
    fill(random(colorlist));
    ellipse(50, 50, 100);
    timer = millis();
  }
}
