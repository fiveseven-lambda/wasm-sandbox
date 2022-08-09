import('../pkg').then(module => {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

  const buffer = audioCtx.createBuffer(2, audioCtx.sampleRate * 3, audioCtx.sampleRate);
  module.write_sin(buffer);
  const source = audioCtx.createBufferSource();
  source.buffer = buffer;
  source.connect(audioCtx.destination);
  document.getElementById('play').onclick = () => source.start();
})
