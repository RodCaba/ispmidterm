class CaptchaInterface {
  constructor() {
    this.submitButton = createButton('Submit');
    this.playButton = createButton('Play');
    this.generateButton = createButton('Generate New Captcha');
    this.input = createInput();
    this.submitted = false;

    this.submitButton.mousePressed(() => {
      if (this.input.value()) {
        this.submitted = true;
      }
    });
  }

  draw() {
    this.playButton.position(10, 10);
    this.input.position(10, 40);
    text('Play the audio file and submit the captcha', 50, 20);
    textSize(14);
    this.submitButton.position(10, 70);
  }

  hasSubmitted() {
    return this.submitted;
  }

  toggleHasSubmitted(value) {
    this.submitted = value;
  }
}