// Class for the pre-recorded audio file

class Player {
  constructor() {
    this.soundFile = new p5.SoundFile();
    this.originalFile = new p5.SoundFile();
    this.fftOriginal = new p5.FFT();
    this.fftFiltered = new p5.FFT();

    this.masterVolumeLevel = createSlider(0, 1, 0.5, 0.01);
    this.masterVolumeLevel.position(width / 2 + 800, 80);
    this.masterVolumeLevel.style('transform', 'rotate(270deg)');
    this.masterVolumeLevel.style('height', '100px');
  }

  // Load the audio file
  load(file) {
    soundFormats('wav', 'mp3');
    this.soundFile = loadSound(file);
    this.originalFile = loadSound(file);
    this.originalFile.disconnect();
    this.fftOriginal.setInput(this.originalFile);
    this.fftFiltered.setInput(filterChain);
  }

  // Draw the waveform of the audio file
  drawSpectrum() {
    let spaceBetween = 1;
    let spectrum = this.fftOriginal.analyze();
    let spectrumFiltered = this.fftFiltered.analyze();
    push();
    translate(width / 2 + 110, height / 4);
    fill(0);
    text('Spectrum In', 0, 0);
    text('Spectrum Out', 0, 250);
    noFill();
    stroke(0, 255, 0);
    for (let i = 0; i < spectrum.length; i++) {
      let amp = spectrum[i];
      let y = map(amp, 0, 255, 200, 0);
      rect(i * spaceBetween, y, spaceBetween, 200 - y);
    }
    stroke(255, 0, 0);
    for (let i = 0; i < spectrumFiltered.length; i++) {
      let amp = spectrumFiltered[i];
      let y = map(amp, 0, 255, 500, 300);
      rect(i * spaceBetween, y, spaceBetween, 500 - y);
    }
    pop();
  }

  drawMasterVolume() {
    push();
    translate(width / 2 + 200, 50);
    rect(0, 0, 100, 150);
    fill(0);
    text('Master Volume', 0, 0);
    text(this.masterVolumeLevel.value(), 20, 60);
    pop();
  }

  // Play the audio file
  play() {
    this.soundFile.play();
    this.originalFile.play();
  }

  // Pause the audio file
  pause() {
    this.soundFile.pause();
    this.originalFile.pause();
  }

  // Stop the audio file
  stop() {
    this.soundFile.stop();
    this.originalFile.stop();
  }

  updateMasterVolume() {
    this.soundFile.amp(this.masterVolumeLevel.value());
  }

  connectFilters() {
    filterChain = new p5.Filter();
    this.soundFile.disconnect();
    filterChain.chain(lowPassFilter, distortionFilter, compressorFilter, reverbFilter);
    this.soundFile.connect(filterChain);
  }

  disconnect() {
    this.soundFile.disconnect();
  }

  get isPlaying() {
    return this.soundFile.isPlaying();
  } 
}