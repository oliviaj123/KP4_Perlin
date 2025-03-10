let h;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  t = 0;
}

function draw() {
  colorMode(RGB);
  background(0, 5);

  let x1 = width * noise(t + 15);
  let x2 = width * noise(t + 25);
  let x3 = width * noise(t + 35);
  let x4 = width * noise(t + 45);
  let y1 = height * noise(t + 55);
  let y2 = height * noise(t + 65);
  let y3 = height * noise(t + 75);
  let y4 = height * noise(t + 85);
  
  colorMode(HSB);
  
  h = map((noise(0 + frameCount*0.01)), 0, 1, 0, 360);
  
  //noFill();
  stroke(h, 90, 100);
  strokeWeight(1);

  bezier(x1, y1, x2, y2, x3, y3, x1, y1);
  
  t += 0.01;
}