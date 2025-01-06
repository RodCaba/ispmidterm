class Player {
  constructor() {
    soundFormats('wav', 'mp3');
    this.sound1 = loadSound('./static/Ex2_sound1.wav');
    this.sound2 = loadSound('./static/Ex2_sound2.wav');
    this.sound3 = loadSound('./static/Ex2_sound3.wav');
    this.sound4 = loadSound('./static/Kalte_Ohren_(_Remix_).mp3');
    this.selectedSound = this.sound1;
  }

  get isPlaying() {
    return this.sound1.isPlaying() || this.sound2.isPlaying() || this.sound3.isPlaying() || this.sound4.isPlaying();
  }

  playStop() {
    if (this.isPlaying) {
      this.selectedSound.pause();
    } else {
      this.selectedSound.play();
    }
  }

  updateSelectedSound(selectedSound) {
    this.selectedSound.stop();
    if (selectedSound === 'sound1') {
      this.selectedSound = this.sound1;
    } else if (selectedSound === 'sound2') {
      this.selectedSound = this.sound2;
    } else if (selectedSound === 'sound3') {
      this.selectedSound = this.sound3;
    } else if (selectedSound === 'kalteOhren') {
      this.selectedSound = this.sound4;
    }
  }
}