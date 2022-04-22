var readlineSync = require('readline-sync');

exports.prompt = promptText => {
  return readlineSync.question(promptText);
};
