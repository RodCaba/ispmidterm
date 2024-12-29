// Class for the pre-recorded audio file

class Player {
  constructor() {
    this.soundFile = new p5.SoundFile();
    this.fftOriginal = new p5.FFT();
    this.fftOriginal.setInput(this.soundFile);
    this.fftFiltered = new p5.FFT();
  }

  // Load the audio file
  load(file) {
    soundFormats('wav', 'mp3');
    this.soundFile = loadSound(file);
  }

  // Draw the waveform of the audio file
  drawSpectrum() {
    let spaceBetween = 1;
    let spectrum = this.fftOriginal.analyze();
    let spectrumFiltered = this.fftFiltered.analyze();
    push();
    translate(width / 2, height / 2);
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
      let y = map(amp, 0, 255, 600, 200);
      rect(i * spaceBetween, y, spaceBetween, 600 - y);
    }
    pop();
  }

  // Play the audio file
  play() {
    this.soundFile.play();
  }

  // Pause the audio file
  pause() {
    this.soundFile.pause();
  }

  // Stop the audio file
  stop() {
    this.soundFile.stop();
  }

  connectFilters() {
    this.soundFile.disconnect();
    lowPassFilter.process(this.soundFile);
    reverbFilter.process(this.soundFile);
  }

  disconnect() {
    this.soundFile.disconnect();
  }

  get isPlaying() {
    return this.soundFile.isPlaying();
  } 
}