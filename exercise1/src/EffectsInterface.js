// Class to encapsulate all the effects User Interface elements and position them on the canvas

class EffectsInterface {
  constructor() {
    this.lpfCutOff = new Knob(60, 240, 'Cut Off Frequency', 10, 22050);
    this.lpfRes = new Knob(180, 240, 'Resonance', 0, 1);
    this.lpfDryWet = createSlider(0, 1, 1, 0.01);
    this.lpfOutputLevel = createSlider(0, 1, 1, 0.01);
  }

  update() {
    this.setLowPassFilter();
  }

  start() {
    this.startSliders();
  }

  startSliders() {
    this.lpfDryWet.position(0, 350);
    this.lpfDryWet.style('transform', 'rotate(270deg)');
    this.lpfDryWet.style('height', '100px');

    this.lpfOutputLevel.position(140, 350);
    this.lpfOutputLevel.style('transform', 'rotate(270deg)');
    this.lpfOutputLevel.style('height', '100px');
  }

  setLowPassFilter() {
    push();
    this.lpfCutOff.draw();
    this.lpfRes.draw();
    fill(0);
    text('Low Pass Filter', 10, 200);

    text('Dry/Wet', 40, 480);
    text(this.lpfDryWet.value(), 10, 400);

    text('Output Level', 160, 480);
    text(this.lpfOutputLevel.value(), 140, 400);
    pop();
  }

  // Function that sets the mousePressed event for the elements, to be called by p5.js
  mousePressed() {
    this.lpfCutOff.mousePressed();
    this.lpfRes.mousePressed();
  }

  mouseReleased() {
    this.lpfCutOff.mouseReleased();
    this.lpfRes.mouseReleased();
  }

}