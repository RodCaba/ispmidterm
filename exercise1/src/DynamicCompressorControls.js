// Class to encapsulate all the Dynamic Compressor effects User Interface elements and position them on the canvas

class DynamicCompressorControls {
  constructor() {
    this.initialX = 300;
    this.initialY = 80;
    this.attack = new Knob(
      this.initialX + 50,
      this.initialY + 40,
      'Attack',
      0.001,
      0.2,
      0.003
    );
    this.knee = new Knob(
      this.initialX + 170,
      this.initialY + 40,
      'Knee',
      0,
      40,
      30
    );
    this.release = new Knob(
      this.initialX + 290,
      this.initialY + 40,
      'Release',
      0.001,
      0.2,
      0.03
    );
    this.ratio = new Knob(
      this.initialX + 90,
      this.initialY + 120,
      'Ratio',
      1,
      20,
      12
    );
    this.treshold = new Knob(
      this.initialX + 210,
      this.initialY + 120,
      'Treshold',
      -100,
      0,
      -24
    );
    this.dryWet = createSlider(0, 1, 0.5, 0.01);
    this.outputLevel = createSlider(0, 1, 1, 0.01);
  }

  update() {
    this.setDynamicCompressor();
  }

  start() {
    this.startSliders();
  }

  startSliders() {
    this.dryWet.position(this.initialX + 40, this.initialY + 230);
    this.dryWet.style('transform', 'rotate(270deg)');
    this.dryWet.style('height', '100px');

    this.outputLevel.position(this.initialX + 230, this.initialY + 230);
    this.outputLevel.style('transform', 'rotate(270deg)');
    this.outputLevel.style('height', '100px');
  }

  setDynamicCompressor() {
    noFill();
    rect(this.initialX, this.initialY, 400, 400);
    push();
    this.attack.draw();
    this.knee.draw();
    this.release.draw();
    this.ratio.draw();
    this.treshold.draw();
    fill(0);
    text('Dynamic Compressor', this.initialX, this.initialY);

    text('Dry/Wet', this.initialX + 80, this.initialY + 380);
    text(this.dryWet.value(), this.initialX + 40, this.initialY + 300);

    text('Output Level', this.initialX + 250, this.initialY + 380);
    text(this.outputLevel.value(), this.initialX + 230, this.initialY + 300);
    pop();
    this.handleDynamicCompressorChange();
  }

  mousePressed() {
    this.attack.mousePressed();
    this.knee.mousePressed();
    this.release.mousePressed();
    this.ratio.mousePressed();
    this.treshold.mousePressed();
  }

  mouseReleased() {
    this.attack.mouseReleased();
    this.knee.mouseReleased();
    this.release.mouseReleased();
    this.ratio.mouseReleased();
    this.treshold.mouseReleased();
  }

  handleDynamicCompressorChange() {
    let attack = this.attack.getValue();
    setDynamicCompressorAttack(attack);

    let knee = this.knee.getValue();
    setDynamicCompressorKnee(knee);

    let release = this.release.getValue();
    setDynamicCompressorRelease(release);

    let ratio = this.ratio.getValue();
    setDynamicCompressorRatio(ratio);

    let treshold = this.treshold.getValue();
    setDynamicCompressorTreshold(treshold);

    let dryWet = this.dryWet.value();
    setDynamicCompressorDryWet(dryWet);

    let outputLevel = this.outputLevel.value();
    setDynamicCompressorOutputLevel(outputLevel);
  }
}