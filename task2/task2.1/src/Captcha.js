class Captcha {
  constructor() {
    this.captcha = this.generateCaptcha();
    this.speech = new p5.Speech();
    this.speech.setRate(0.5);
    // Set a background noise for the speech to be more difficult to understand
    this.sound = new p5.Noise();
    this.sound.amp(0.2);
  }

  generateCaptcha() {
    var captcha = [];
    for (var i = 0; i < 5; i++) {
      captcha.push(letters.charAt(Math.floor(Math.random() * letters.length)));
    }
    return captcha;
  }

  setNewCaptcha() {
    this.captcha = this.generateCaptcha();
  }

  readCaptcha() {
    this.sound.start();
    for (var i = 0; i < this.captcha.length; i++) {
      setTimeout(this.speech.speak.bind(this.speech, this.captcha[i]), i * 1500);
    }
    setTimeout(this.sound.stop.bind(this.sound), this.captcha.length * 1500);
  }

  compareCaptcha(input) {
    if (input === this.captcha.join('')) {
      return true;
    }
    return false;
  }
}