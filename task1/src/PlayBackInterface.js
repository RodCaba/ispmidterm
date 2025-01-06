// Class to encapsulate all the playback User Interface elements and position them on the canvas
class PlayBackInterface {
	// Instantiate DOM objects
	constructor() {
		this.pauseButton = createButton('Pause');
		this.playButton = createButton('Play');
		this.stopButton = createButton('Stop');
		this.skipToStartButton = createButton('Skip to Start');
		this.skipToEndButton = createButton('Skip to End');
		this.loopButton = createButton('Loop');
		this.recordButton = createButton('Record');
		this.sourceSelector = createSelect();
	}

	start() {
		createCanvas(1200, 1200);
		background(220);

		this.startButtons();
	}

	// Calls at every rerender of the canvas. Updates the interface
	update(isPlayerPlaying, isRecording) {
		this.drawButtons(isPlayerPlaying, isRecording);
	}

	// Set the position of the buttons
	startButtons() {
		this.pauseButton.position(10, 10);
		this.playButton.position(70, 10);
		this.stopButton.position(120, 10);
		this.skipToStartButton.position(170, 10);
		this.skipToEndButton.position(270, 10);
		this.loopButton.position(360, 10);
		this.recordButton.position(410, 10);
		this.sourceSelector.position(500, 10);
		this.sourceSelector.option('Prerecord', 'prerecord');
		this.sourceSelector.option('Microphone', 'mic');
	}

	setButtonFunctions(
		playFunction,
		pauseFunction,
		stopFunction,
		skipToStartFunction,
		skipToEndFunction,
		loopFunction,
		recordFunction
	) {
		this.playButton.mousePressed(playFunction);
		this.pauseButton.mousePressed(pauseFunction);
		this.skipToStartButton.mousePressed(skipToStartFunction);
		this.skipToEndButton.mousePressed(skipToEndFunction);
		this.loopButton.mousePressed(loopFunction);
		this.stopButton.mousePressed(stopFunction);
		this.recordButton.mousePressed(recordFunction);
	}

	drawButtons(isPlayerPlaying, isRecording) {
		if (isPlayerPlaying) {
			this.pauseButton.removeAttribute('disabled');
			this.playButton.attribute('disabled', '');
		} else {
			this.pauseButton.attribute('disabled', '');
			this.playButton.removeAttribute('disabled');
		}

		if (isRecording) {
			this.recordButton.html('Pause Recording');
		} else {
			this.recordButton.html('Record');
		}
	}
}
