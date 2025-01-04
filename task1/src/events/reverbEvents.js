function setReverbDuration(duration) {
  reverbFilter.set(duration);
}

function setReverbDecay(decay) {
  reverbFilter.set(decay);
}

function setReverbDryWet(dryWet) {
  reverbFilter.drywet(dryWet);
}

function setReverbOutputLevel(level) {
  reverbFilter.amp(level);
}