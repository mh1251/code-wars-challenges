
//   Goal
// The goal is to count the number of words, chars and lines in a block of text. [Pretty much like the wc command].

// Fill the parse method so that the 3 counters (wordCount, charCount & lineCount) are properly setted in the DocumentParser object.

// Helper
// In order to handle large blocks of text, you do not receive any string in the constructor or in the parse method.

// Instead, you receive a Reader instance as a parameter of your DocumentParser constructor.

// This reader expose only one method : getChunk()

// Returns the following fragment of text from the file it is reading
// Returns a string of random size
// Returns at least one char
// Returns an empty string when finished


function FileReaderSimulator(text) {
  var index = -1;
  console.log('index', index)
  this.getChunk = function () {
    console.log('index', index)
    index++;
    return index == text.length ? "" : text.charAt(index);
  }

  this.reset = function(){
    index = -1;
  }
}

class DocumentParser {
  constructor(reader) {
    this.reader = reader;
    this.wordCount = 0;
    this.charCount = 0;
    this.lineCount = 0;
  }
  reset(){
    this.reader.reset();
  }

  parse() {
    let chunk;
    let ch = null;
    let prev = null;
    while (chunk = this.reader.getChunk()) {
      prev = ch;
      ch = chunk;
      if (ch != '\n'){
        this.charCount++
      } 
      if ((ch == ' ' || ch == '\n')
        && prev != ' ' && prev != '\n' && prev != null) {
        this.wordCount++
      }
      if (ch == '\n') {
        this.lineCount++
      }
    }
    // increment words and lines for last word
    if (this.charCount > 0) {
      this.wordCount++;
      this.lineCount++;
    }
  }
}

let text = "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.\n\
  De carne lumbering animata corpora quaeritis.\n\
  Summus brains sit??, morbo vel maleficia?\n\
  s aliorum sicut serpere crabs nostram.";
let reader = new FileReaderSimulator(text);
let parser = new DocumentParser(reader);

parser.parse();
console.log(parser.wordCount, parser.lineCount, parser.charCount)




