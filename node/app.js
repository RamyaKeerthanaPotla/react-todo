//Http Moduule
const http = require("http");

const server = http.createServer();

server.on("connection", () => {
  console.log("New connection...");
});
server.listen(3000);

console.log("Listening on port 3000..");

// Events Module
// const EventEmitter = require("events");
// const emitter = new EventEmitter();
// //Register a listner
// emitter.on("messageLogged", function () {
//   console.log("listner called");
// });
// emitter.emit("messageLogged"); // used to raise an event

//File system Module
// const fs = require("fs");
// const filesSynchronous = fs.readdirSync("./");
// console.log(filesSynchronous);

// const fileAsynchronous = fs.readdir("./", function (err, files) {
//   if (err) console.log(err);
//   else console.log("result", files);
// });

// All the async methods take function as their last argument. We ccall these as callback.

//OS
// const os = require("os");
// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();
// console.log(`Total Memory ${totalMemory} and Free Memory is ${freeMemory}`);

//Path
// const path = require("path");
// const pathObj = path.parse(__filename);
// console.log(pathObj);

//Template string : is using of back-ticks ``
