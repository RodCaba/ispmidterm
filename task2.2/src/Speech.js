class Speech {
  constructor() {
    this.recognition = new p5.SpeechRec();
    this.recognition.continuous = true;
  }

  start() {
    this.recognition.start();
  }

  process() {
    const string = this.recognition.resultString;
    if (string) {
      const cleanStr = this.cleanString(string);
      return this.getCommandStruct(cleanStr);
    } else {
      return null;
    }
  }

  cleanString(string) {
    let cleanString = string;
    cleanString = cleanString.trim();
    cleanString = cleanString.toLowerCase();
    cleanString = cleanString.replace(/\s/g, '');
    cleanString = cleanString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
    console.log(cleanString);
    return cleanString;
  }

  getCommandStruct(command) {
    if (
      command === 'blue' || command === 'yellow' || command === 'red' || command === 'green'
      || command === 'black' || command === 'white' || command === 'orange' || command === 'purple'
    ) {
      return {
        type: 'color',
        value: command
      }
    }

    let number = parseInt(command);

    if (!isNaN(number)) {
      return {
        type: 'number',
        value: number
      }
    }

    if (command === 'circle' || command === 'square' || command === 'triangle') {
      return {
        type: 'shape',
        value: command
      }
    }
  }
}