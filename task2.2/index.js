var player;
var interface;
var analyzer;
var speech;

function preload() {
  player = new Player();
}

function setup() {
  interface = new Interface();
  interface.setup();

  analyzer = new Analyzer(player.sound1);

  setupInterfaceFunctions();
}

function draw() {
  interface.draw(player.isPlaying);
  analyzer.draw(interface.selector.value());

  if (typeof speech !== 'undefined') {
    const command = speech.process();
    if (interface.selector.value() === 'kalteOhren') {
      analyzer.updateParams(command);
    }
  }
}

function setupInterfaceFunctions() {
  interface.playButton.mousePressed(() => {
    player.playStop();
    analyzer.toggleAnalyzer(player.isPlaying);
  });

  interface.selector.changed(() => {
    player.updateSelectedSound(interface.selector.value());
    analyzer.updateSelectedSound(player.selectedSound);

    if (interface.selector.value() === 'kalteOhren') {
      speech = new Speech();
      speech.start();
    }
  });
}