
// Inside this file we write cpu bound tasks. large calculations


const { parentPort } = require("worker_threads");

let counter = 0;

for (let i = 0; i < 20_000_000_000; i++) {
  // iteration over 20 million times.
  counter++;
}

parentPort.postMessage(counter);