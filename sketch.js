function setup() {
  createCanvas(300, 300, WEBGL);
  createCanvas(windowWidth, windowHeight);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function draw() {
  background(256, 256, 256);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(60, 30);
}
