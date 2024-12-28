function playSound() {
  player.play();
}

function pauseSound() {
  player.pause();
}

function stopSound() {
  player.stop();
}

function skipToStart() {
  player.soundFile.jump(0);
}

function skipToEnd() {
  player.soundFile.jump(player.soundFile.duration());
}

function loop() {
  player.soundFile.loop();
}