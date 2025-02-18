let font;
let points = [];

function preload() {
    font = loadFont('assets/myFont.otf');
}

function setup() {
    createCanvas(600, 600);
    background(56, 94, 15); 

    if (font) {
        points = font.textToPoints('KASA', 100, 450, 500, { sampleFactor: 0.2 });
        print(points);
    } else {
        print("unable to load font");
    }
}

function draw() {
    background(56, 94, 15); 
    fill(237, 145, 33); 
    noStroke();

    for (let i = 0; i < points.length; i++) {
        let jitterX = random(-1, 1);
        let jitterY = random(-1, 1);
        ellipse(points[i].x + jitterX, points[i].y + jitterY, 5, 5);
    }
}
