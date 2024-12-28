// Class for Knob elements, which are used to control effects parameters
class Knob {
  constructor(x, y, label, minVal, maxVal) {
    this.dragging = false;
    this.mouseOver = false;

    this.value = 0;
    this.x = x;
    this.y = y;
    this.label = label;
    this.minVal = minVal;
    this.maxVal = maxVal;

    this.radius = 25;
    this.angle = 0;
    this.offsetAngle = 0;
  }

  draw() {
    // Draw the knob

    if (this.dragging) {
      let dx = mouseX - this.x;
      let dy = mouseY - this.y;
      this.angle = atan2(dy, dx) - this.offsetAngle;
    }

    if (this.mouseOver || this.dragging) {
      fill(255);
    } else {
      fill(200);
    }

    // Calculate the value of the knob by mapping the angle to the range of values
    let calcAngle = 0;

    console.log(this.angle);
    if (this.angle === 0) {
      calcAngle = 0;
    } else if (this.angle < 0) {
      calcAngle = map(this.angle, -PI, 0, PI, 0);
    } else {
      calcAngle = map(this.angle, 0, PI, TWO_PI, PI);
    }

    console.log(int(degrees(calcAngle)));

    if (this.angle === 0) {
      this.value = this.minVal;
    } else {
      this.value = map(calcAngle, 0, TWO_PI, this.maxVal, this.minVal);
    }

    push();
    strokeWeight(1);
    translate(this.x, this.y);
    rotate(this.angle);
    ellipse(0, 0, this.radius * 2);
    fill(0);
    line(0, 0, 0, -this.radius);
    pop();

    push();
    translate(this.x, this.y);
    fill(0);
    textAlign(CENTER);
    text(int(this.value), 0, this.radius + 10);
    text(this.label, 0, this.radius + 30);
    pop();
  }

  mousePressed() {
    let d = dist(mouseX, mouseY, this.x, this.y);
    if (d < this.radius) {
      this.dragging = true;
      this.offsetAngle = atan2(mouseY - this.y, mouseX - this.x) - this.angle;
    }
  }

  mouseReleased() {
    this.dragging = false;
  }

  getValue() {
    return this.value;
  }
}