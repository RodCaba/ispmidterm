class Analyzer {
  constructor(sound) {
    this.rms = 0;
    this.spectralSkewness = 0;
    this.powerSpectrum = [];
    if (typeof Meyda === 'undefined') {
      console.log('Meyda could not be found');
    } else {
      this.analyzer = Meyda.createMeydaAnalyzer({
        audioContext: getAudioContext(),
        source: sound,
        bufferSize: 512,
        featureExtractors: ['rms','spectralSkewness', 'powerSpectrum'],
        callback: features => {
          this.rms = map(features.rms, 0, 0.1, 40, 200);
          this.spectralSkewness = map(features.spectralSkewness, 0, 10, -200, 200);
          this.powerSpectrum = features.powerSpectrum;
        }
      });
    }
    this.sound4Params = {
      color: 'green',
      numberOfShapes: 1
    }
  }

  toggleAnalyzer(soundIsPlaying) {
    if (soundIsPlaying) {
      this.analyzer.start();
    } else {
      this.analyzer.stop();
    }
  }

  draw(selectedSound) {
    if (selectedSound === 'sound1') {
      this.drawSound1();
    } else if (selectedSound === 'sound2') {
      this.drawSound2();
    } else if(selectedSound === 'sound3') {
      this.drawSound3();
    } else if (selectedSound === 'kalteOhren') {
      this.drawSound4();
    }
  }

  updateSelectedSound(sound) {
    this.analyzer.setSource(sound);
  }

  updateParams(command) {
    if (command) {
      if (command.type === 'color') {
        this.sound4Params.color = command.value;
      } else if (command.type === 'number') {
        this.sound4Params.numberOfShapes = command.value;
      }
    }
  }

  drawSound1() {
    fill(0, 255, 0);
    rect(0, height / 2, width, this.spectralSkewness);
  }

  drawSound2() {
    fill(0, 0, 255);
    rect(width / 2, height / 2, -this.rms, -this.rms);
    rect(width / 2, height / 2, this.rms, this.rms);
  }

  drawSound3() {
    fill(255, 0, 0);
    for (let i = 0; i < this.powerSpectrum.length; i++) {
      let x = map(i, 0, this.powerSpectrum.length, 0, width);
      let h = -height + map(this.powerSpectrum[i], 0, 255, height, 0);
      rect(x, height / 1.75, width / this.powerSpectrum.length, h);
    }
  }

  drawSound4() {
    fill(this.sound4Params.color);
    for (let i = 0; i < this.sound4Params.numberOfShapes; i++) {
      let x = width / 2 + i % 2 * 100;
      let y = height / 2 + i % 2 * 100;
      ellipse(x, y, this.rms, this.rms);
    }
  }
}