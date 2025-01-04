// Class for recording the user's input using the microphone

class Recorder {
  constructor() {
    this.microphone = new p5.AudioIn();
    this.recorder = new p5.SoundRecorder();
    this.soundFile = new p5.SoundFile();
    this.recording = false;
  }

  // Instantiate the microphone and recorder
  start() {
    this.microphone.start();
    this.recorder.setInput(this.microphone);
  }

  // Get the recording value
  get isRecording() {
    return this.recording;
  }

  // Record the user's input
  record() {
    this.recorder.record(this.soundFile);
    this.recording = true;
  }

  // Stop the recording and save the file
  stop() {
    this.recorder.stop();
    this.recording = false;
  }

  play() {
    this.soundFile.play();
  }
}