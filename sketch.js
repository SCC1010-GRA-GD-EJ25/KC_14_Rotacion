let grado = Math.PI / 180;
let r = grado;

function setup() {
  // put setup code here
  createCanvas(800,800)
  rectMode(CENTER);
  background(255);
  noCursor();
}

function dibujo(x, y, grados) {
  push();
  translate(x, y);
  rotate(grados);
  rect(0, 0, 100, 100);
  pop();
}

function draw() {
  textSize(60);
  for (let i = 0; i < 20; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let rojo = random(0, 255);
    let verde = random(0, 255);
    let azul = random(0, 255);
    fill(rojo, verde, azul, 300);
    dibujo(x, y, r);
    r += grado;

  }

  text("HK", mouseX, mouseY);

}
