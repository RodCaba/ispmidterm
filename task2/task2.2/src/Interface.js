class Interface {
  constructor() {
    this.playButton = createButton('Play');
    this.selector = createSelect();
  }

  setup() {
    createCanvas(600, 400);
    background(220);
    this.playButton.position(10, 420);

    this.selector.position(10, 450);
    this.selector.option('Sound 1', 'sound1');
    this.selector.option('Sound 2', 'sound2');
    this.selector.option('Sound 3', 'sound3');
    this.selector.option('Kalte Ohren', 'kalteOhren');
    this.selector.selected('Sound 1');
  }

  draw(isPlayerPlaying) {
    background(220);

    if (isPlayerPlaying) {
      this.playButton.html('Pause');
    } else {
      this.playButton.html('Play');
    }
  }
}