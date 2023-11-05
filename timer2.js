const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  // process.stdout.write('.');

  if (Number(key) > 0 && Number(key) < 10) {
    console.log(`setting timer for ${key} seconds...`);
    setTimeout(() => {
      console.log("Beep!");
    }, Number(key) * 1000);
  }

  if (key.toLowerCase() === 'b') {
    console.log("Beep!");
    clearTimeout(function() {
      console.log("Cancedlled!");
    });
  }

  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }

});

console.log('after callback');
