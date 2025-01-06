var letters = "abcdefghijklmnopqrstuvwxyz";
var nonLettersVars = [
  'BACKSPACE',
  'DELETE',
  'ENTER',
  'RETURN',
  'TAB',
  'ESCAPE',
  'SHIFT',
  'CONTROL',
  'OPTION',
  'ALT',
  'UP_ARROW',
  'DOWN_ARROW',
  'LEFT_ARROW',
  'RIGHT_ARROW',
]
var randomCaptcha;

var captcha;
var captchaInterface;

function setup() {
  createCanvas(400, 400);
  background(220);

  captcha = new Captcha();
  captchaInterface = new CaptchaInterface();

  captchaInterface.playButton.mousePressed(captcha.readCaptcha.bind(captcha));
  captchaInterface.generateButton.mousePressed(captcha.setNewCaptcha.bind(captcha));
}

function draw() {
  background(220);
  captchaInterface.draw();

  if (captchaInterface.hasSubmitted()) {
    if (captcha.compareCaptcha(captchaInterface.input.value())) {
      text('Correct', 10, 100);
    } else {
      text('Incorrect', 10, 100);
    }
  }
}

function keyPressed() {
  if (!nonLettersVars.includes(keyCode)) {
    captchaInterface.toggleHasSubmitted(false);
  }
}