// Class for the pre-recorded audio file

class Player {
  constructor() {
    this.soundFile = new p5.SoundFile();
  }

  // Load the audio file
  load(file) {
    soundFormats('wav', 'mp3');
    this.soundFile = loadSound(file);
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

  get isPlaying() {
    return this.soundFile.isPlaying();
  } 
}