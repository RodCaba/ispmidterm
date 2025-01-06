class DelayControls {
  constructor() {
    this.initialX = 10;
    this.initialY = 780;
    this.delayTime = new Knob(
      this.initialX + 50,
      this.initialY + 40,
      'Delay Time',
      0.1,
      1,
      0.5
    );
    this.delayFeedback = new Knob(
      this.initialX + 170,
      this.initialY + 40,
      'Feedback',
      0,
      1,
      0.5
    );
    this.delayDryWet = createSlider(0, 1, 0.5, 0.01);
    this.delayOutputLevel = createSlider(0, 1, 1, 0.01);
  }

  update() {
    this.setDelay();
  }

  start() {
    this.startSliders();
  }

  startSliders() {
    this.delayDryWet.position(this.initialX + 40, this.initialY + 150);
    this.delayDryWet.style('transform', 'rotate(270deg)');
    this.delayDryWet.style('height', '100px');

    this.delayOutputLevel.position(this.initialX + 130, this.initialY + 150);
    this.delayOutputLevel.style('transform', 'rotate(270deg)');
    this.delayOutputLevel.style('height', '100px');
  }

  setDelay() {
    noFill();
    rect(this.initialX, this.initialY, 220, 300);
    push();
    this.delayTime.draw();
    this.delayFeedback.draw();
    fill(0);
    text('Delay', this.initialX, this.initialY);
    text('Dry/Wet', this.initialX + 30, this.initialY + 280);
    text(this.delayDryWet.value(), this.initialX, this.initialY + 200);

    text('Output Level', this.initialX + 150, this.initialY + 280);
    text(this.delayOutputLevel.value(), this.initialX + 130, this.initialY + 200);
    pop();
    this.handleDelayChange();
  }

  mousePressed() {
    this.delayTime.mousePressed();
    this.delayFeedback.mousePressed();
  }

  mouseReleased() {
    this.delayTime.mouseReleased();
    this.delayFeedback.mouseReleased();
  }

  handleDelayChange() {
    let delayTime = this.delayTime.getValue();
    let delayFeedback = this.delayFeedback.getValue();
    let dryWet = this.delayDryWet.value();
    let outputLevel = this.delayOutputLevel.value();
    setDelayTime(delayTime);
    setDelayFeedback(delayFeedback);
    setDelayDryWet(dryWet);
    setDelayOutputLevel(outputLevel);
  }
}