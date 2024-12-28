function triggerRecord() {
  if (!recorder.isRecording) {
    recorder.record();
  } else {
    recorder.stop();
  }
}