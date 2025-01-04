function setWaveshaperDistortion(amount, oversample) {
  let oversampleValue = 'none';

  if (oversample > 0 && oversample < 1) {
    oversampleValue = '2x';
  } else if (oversample >= 1 && oversample < 2) {
    oversampleValue = '4x';
  }

  distortionFilter.set(amount, oversampleValue);
}

function setWaveshaperDistortionDryWet(value) {
  distortionFilter.drywet(value);
}

function setWaveshaperDistortionOutputLevel(value) {
  distortionFilter.amp(value);
}