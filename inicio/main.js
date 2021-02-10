function setup() {
  canvas = createCanvas(windowWidth, windowHeight)
  initModel()
}

function draw() {
  background('blue')
  
  let radius = map(value, 0, 1, 0, 600)
  circle(windowWidth / 2, windowHeight / 2, radius)
}
