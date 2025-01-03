class Captcha {
  constructor() {
    this.captcha = this.generateCaptcha();
    this.speech = new p5.Speech();
    this.speech.setRate(0.5);
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
    for (var i = 0; i < this.captcha.length; i++) {
      setTimeout(this.speech.speak.bind(this.speech, this.captcha[i]), i * 1500);
    }
  }

  compareCaptcha(input) {
    if (input === this.captcha.join('')) {
      return true;
    }
    return false;
  }
}