var player;
var recorder;
var interface;
var lpfControls;
var reverbControls;
var recordButton;

// Effects
var lowPassFilter;
var reverbFilter;

let effect;

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

  lowPassFilter = new p5.LowPass();
  reverbFilter = new p5.Reverb();

	lpfControls = new LowPassFilterControls();
	lpfControls.start();

  reverbControls = new ReverbControls();
  reverbControls.start();

	// Disconnect the clean sound from the output
	player.connectFilters();
}

function draw() {
	background(220);
	interface.update(player.isPlaying);
	lpfControls.update();
  reverbControls.update();

  player.drawSpectrum();
}

function mousePressed() {
	lpfControls.mousePressed();
  reverbControls.mousePressed();
}

function mouseReleased() {
	lpfControls.mouseReleased();
  reverbControls.mouseReleased();
}
