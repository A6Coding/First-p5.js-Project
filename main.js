function preload() {}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(350, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 640, 480);

    fill(255, 0, 0);
    circle(10, 10, 25);
    circle(10, 470, 25);
    circle(630, 10, 25);
    circle(630, 470, 25);
    fill(0, 0, 0);
    rect(618, 20, 25, 440);
    rect(-3, 20, 25, 440);
    rect(20, -5, 600, 25);
    rect(20, 460, 600, 25);
}

function take_snapshot() {
    save('student_name.png');
}

function filter_tint() {
    tint_color = document.getElementById("color_name").value;
}