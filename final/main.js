let sound

function setup() {
  canvas = createCanvas(windowWidth, windowHeight)
  initModel()

  sound = new Pizzicato.Sound()
  sound.play()
}

function draw() {
  background('blue')

  let size = map(value, 0, 1, 0, 150)

  noStroke()
  for (let i = 0; i < 10; i++) {
    fill('white')
    circle(random(windowWidth), random(windowHeight), size)
  }

  let frequency = map(value, 0, 1, 100, 1200)
  sound.frequency = frequency

  let radius = map(value, 0, 1, 0, windowHeight * 0.8)
  circle(windowWidth / 2, windowHeight / 2, radius)
}
