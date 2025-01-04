var player;
var recorder;
var interface;
var lpfControls;
var reverbControls;
var dynamicCompressorControls;
var waveshaperDistortionControls;
var recordButton;

// Effects
var filterChain;
var lowPassFilter;
var reverbFilter;
var compressorFilter;
var distortionFilter;

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
	compressorFilter = new p5.Compressor();
	distortionFilter = new p5.Distortion();

	lpfControls = new LowPassFilterControls();
	lpfControls.start();

  reverbControls = new ReverbControls();
  reverbControls.start();

	dynamicCompressorControls = new DynamicCompressorControls();
	dynamicCompressorControls.start();

	waveshaperDistortionControls = new WaveshaperDistortionControls();
	waveshaperDistortionControls.start();

	// Disconnect the clean sound from the output
	player.connectFilters();
}

function draw() {
	background(220);
	interface.update(player.isPlaying);
	player.drawMasterVolume();
	player.updateMasterVolume();
	lpfControls.update();
  reverbControls.update();
	dynamicCompressorControls.update();
	waveshaperDistortionControls.update();

  player.drawSpectrum();
}

function mousePressed() {
	lpfControls.mousePressed();
  reverbControls.mousePressed();
	dynamicCompressorControls.mousePressed();
	waveshaperDistortionControls.mousePressed();
}

function mouseReleased() {
	lpfControls.mouseReleased();
  reverbControls.mouseReleased();
	dynamicCompressorControls.mouseReleased();
	waveshaperDistortionControls.mouseReleased();
}
