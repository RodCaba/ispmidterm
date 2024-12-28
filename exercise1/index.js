var player;
var recorder;
var interface;
var effectsInterface;
var recordButton;

function preload() {
	player = new Player();
	player.load('./static/example.wav');
}

function setup() {
	recorder = new Recorder();
	recorder.start();

	interface = new PlayBackInterface();
	interface.start();
	interface.setButtonFunctions(
		playSound,
		pauseSound,
		stopSound,
		skipToStart,
		skipToEnd,
		loop,
		triggerRecord
	);

  effectsInterface = new EffectsInterface();
  effectsInterface.start();
}

function draw() {
  background(220);
	interface.update(player.isPlaying);
  effectsInterface.update();
}

function mousePressed() {
  effectsInterface.mousePressed();
}

function mouseReleased() {
  effectsInterface.mouseReleased();
}