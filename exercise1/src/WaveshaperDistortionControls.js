// Class to encapsulate all the Waveshaper Distortion effects User Interface elements and position them on the canvas

class WaveshaperDistortionControls {
  constructor() {
    this.initialX = 300;
    this.initialY = 500;
    this.distortionAmount = new Knob(
      this.initialX + 50,
      this.initialY + 40,
      'Distortion Amount',
      0,
      1,
      0.5
    );
    this.overSample = new Knob(
      this.initialX + 170,
      this.initialY + 40,
      'Over Sample',
      0,
      2,
      1
    );
    this.dryWet = createSlider(0, 1, 0.5, 0.01);
    this.outputLevel = createSlider(0, 1, 1, 0.01);
  }

  update() {
    this.setWaveshaperDistortion();
  }

  start() {
    this.startSliders();
  }

  startSliders() {
    this.dryWet.position(this.initialX + 40, this.initialY + 150);
    this.dryWet.style('transform', 'rotate(270deg)');
    this.dryWet.style('height', '100px');

    this.outputLevel.position(this.initialX + 130, this.initialY + 150);
    this.outputLevel.style('transform', 'rotate(270deg)');
    this.outputLevel.style('height', '100px');
  }

  setWaveshaperDistortion() {
    noFill();
    rect(this.initialX, this.initialY, 220, 300);
    push();
    this.distortionAmount.draw();
    this.overSample.draw();
    fill(0);
    text('Waveshaper Distortion', this.initialX, this.initialY);
    text('Dry/Wet', this.initialX + 30, this.initialY + 280);
    text(this.dryWet.value(), this.initialX, this.initialY + 200);

    text('Output Level', this.initialX + 150, this.initialY + 280);
    text(this.outputLevel.value(), this.initialX + 130, this.initialY + 200);
    pop();
    this.handleWaveshaperDistortionChange();
  }

  mousePressed() {
    this.distortionAmount.mousePressed();
    this.overSample.mousePressed();
  }

  mouseReleased() {
    this.distortionAmount.mouseReleased();
    this.overSample.mouseReleased();
  }

  handleWaveshaperDistortionChange() {
    let distortionAmount = this.distortionAmount.getValue();
    let overSample = this.overSample.getValue();
    setWaveshaperDistortion(distortionAmount, overSample);

    let dryWet = this.dryWet.value();
    setWaveshaperDistortionDryWet(dryWet);

    let outputLevel = this.outputLevel.value();
    setWaveshaperDistortionOutputLevel(outputLevel);
  }
}