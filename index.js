#!/usr/bin/env node

const { showHelp, showVersion, prepareString} = require("./src/lib/help");

const weather = require("./src/lib/weather");
const args = process.argv.slice(2);


// if (args.includes("--help")) {
//     showHelp();
//   }
  
  if (args.includes("-v")) {
    showVersion();
  }
  if (weather){
    //console.log(args);
    prepareString(args);
  }
  
  


 console.log(args);
const [city, country] = args;
weather(args, country).then(console.log).catch(console.error);



