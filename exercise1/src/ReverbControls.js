// Class to encapsulate all the reverb User Interface elements and position them on the canvas

class ReverbControls {
  constructor() {
    this.initialX = 10;
    this.initialY = 430;
    this.reverbDuration = new Knob(
      this.initialX + 50,
      this.initialY + 40,
      'Duration',
      0.1,
      10,
      3
    );
    this.reverbDecayRate = new Knob(
      this.initialX + 170,
      this.initialY + 40,
      'Decay Rate',
      0.1,
      10,
      2
    );
    this.reverbDryWet = createSlider(0, 1, 0, 0.01);
    this.reverbOutputLevel = createSlider(0, 1, 1, 0.01);

    setReverbDuration(3);
    setReverbDecay(2);
    setReverbDryWet(0);
    setReverbOutputLevel(1);
  }

  start() {
    this.startSliders();
  }

  update() {
    this.setReverb();
  }

  startSliders() {
    this.reverbDryWet.position(this.initialX - 10, this.initialY + 150);
    this.reverbDryWet.style('transform', 'rotate(270deg)');
    this.reverbDryWet.style('height', '100px');

    this.reverbOutputLevel.position(this.initialX + 130, this.initialY + 150);
    this.reverbOutputLevel.style('transform', 'rotate(270deg)');
    this.reverbOutputLevel.style('height', '100px');
  }

  setReverb() {
    noFill();
    rect(this.initialX, this.initialY, 220, 300);

    push();
    this.reverbDuration.draw();
    this.reverbDecayRate.draw();
    fill(0);
    text('Reverb', this.initialX, this.initialY);

    text('Dry/Wet', this.initialX + 30, this.initialY + 280);
    text(this.reverbDryWet.value(), this.initialX, this.initialY + 200);

    text('Output Level', this.initialX + 150, this.initialY + 280);
    text(this.reverbOutputLevel.value(), this.initialX + 130, this.initialY + 200);

    pop();

  }

  mousePressed() {
    this.reverbDuration.mousePressed();
    this.reverbDecayRate.mousePressed();
  }

  mouseReleased() {
    this.reverbDuration.mouseReleased();
    this.reverbDecayRate.mouseReleased();
    this.handleReverbChange();
  }

  handleReverbChange() {
    let duration = this.reverbDuration.getValue();
    setReverbDuration(duration);

    let decayRate = this.reverbDecayRate.getValue();
    setReverbDecay(decayRate);

    let dryWetValue = this.reverbDryWet.value();
    setReverbDryWet(dryWetValue);

    let outputLevelValue = this.reverbOutputLevel.value();
    setReverbOutputLevel(outputLevelValue);
  }
}