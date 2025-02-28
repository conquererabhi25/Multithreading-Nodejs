const express = require("express")
const app = express();
const { Worker } = require("worker_threads");

app.get("/non-blocking", (req, res) => {
    console.log("Non-blocking page started..")
    res.status(200).send("<h1>Less CPU dependent task is running...</h1>");
});

app.get("/blocking", (req, res) => {
    
   let counter = 0;
   for (let i = 0; i< 20_000_000_000; i++ ){   // iteration over 20 million times.
    counter++;
   }
res.status(200).send(`result is ${counter}`)

  // const worker = new Worker("./worker.js");
  // worker.on("message", (data) => {
  //   console.log("Counter is running...")
  //   res.status(200).send(`<h1>result is ${data}</h1>`);
  // });

   console.log("Counter is running...")
   
});

app.listen(5000, () => {
    console.log("Server is successfully running on http://localhost:5000"); // Add this line
  });

