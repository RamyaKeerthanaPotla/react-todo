var url = "http://mylogger.io./log";

function logname(message) {
  //send an http request
  console.log(message);
}

module.exports = logname; // we are exporting this function and making it availabe outside this file.
// exports.log = logname; // Both are same.
