function triggerRecord() {
  if (!recorder.isRecording) {
    recorder.recordOutput();
  } else {
    recorder.stop();
  }
}

function triggerMicRecord() {
  if (!recorder.isRecording) {
    recorder.record();
  } else {
    recorder.stop();
    player.loadSound(recorder.soundFile);
    player.connectFilters();
  }
}