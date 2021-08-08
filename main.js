img = "";
status = "";
function preload(){ 
img = loadImage('living room.jpeg');
}
function setup() { 
    canvas = createCanvas(640, 420); 
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Object Detecting";
}
function modelLoaded() { 
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results) {
    if (error) { 
        console.log(error);
    }
    console.log(results);
}

function draw() { 
image(img, 0, 0, 640, 420);
fill("#FF0000");
text("couch", 60, 200);
noFill();
stroke("#FF0000");
rect(70, 200, 450, 350);

fill("#FF0000");
text("Lamp", 600, 150);
noFill();
stroke("#FF0000");
rect(500, 140, 200, 200);
}
