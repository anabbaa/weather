
exports.showHelp = () => {
    const text = `
        How to use this program:
        1. When you input a new string with more than 1 space the program will sanitize it for you.
        2. If you typed the name of a city without capitalization the program will capitalize it for you.
        3. If you included a Capitalized letter in the wrong place of your string the program will sanitize it for you.
        `;
    console.log(text);
  };
  
  exports.showVersion = () => {
    const text = `1.0.0v`;
    console.log(text);
  };

  exports.prepareString = (str) => {
    let newArray = str.map((word) => {
      let fixedWord = word.trim();
      return fixedWord.charAt(0).toUpperCase() + fixedWord.slice(1).toLowerCase();
    });
    console.log(newArray.join(" ").replace(/[^a-zA-Z ]/g, ""));
  };
