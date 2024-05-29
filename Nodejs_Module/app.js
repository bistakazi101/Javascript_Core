const logger = require("./logger.js");
const dblogger = require("./dblogger");
console.log(dblogger);

// here you can use object destructuring as well
// const { log, error, info, warning } = require('./logger');
// Behind the scenes, the require() function executes the logger.js file and returns the exports object.
//  If the require() function cannot find the file, it’ll throw an error.
console.log(logger);

logger.log("Logger message 1",logger.info);
logger.log("Logger message 2",logger.warning);
logger.log("Logger message 3",logger.error);


