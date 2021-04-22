let array = [];
let noiseOffset = 0.0;
let strokeWidth = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);

  drawGrid();


}

function draw() {

  background(220, 5);
  strokeWeight(strokeWidth);

  noiseOffset += 0.05;
  strokeWidth = noise(noiseOffset) * 100;



  if (mouseIsPressed ==true){
    line(mouseX, mouseY, pmouseX, pmouseY);

  }

}

function keyTyped(){

  if (key === 's'){
    saveCanvas('fileName', 'png' )
  } else if (key === 'c'){
    clear();
  }

  return false;
}

function drawGrid(){
numCells = 20;
fillColor = 255;

  for (let i = 0; i <= width; i += width / numCells){
    for (let j = 0; j <= height; j+= height / numCells ){
      if (fillColor === 255){
        fillColor = 200;
      } else {
        fillColor = 255;
      }
      fill(fillColor);
    rect(i, j, width / numCells, height / numCells);

    }

  }
}
