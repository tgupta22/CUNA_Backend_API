// "use strict";
// const express = require("express");
// const app = express();

// app
//   .get("/", (req, res) => {
//     console.log(req.url);
//     res.send("<h1>Hello</h1>"); //determine the content-type automatically
//   })
//   .post("/", (req, res) => {})
//   .patch("/", (req, res) => {})
//   .put("/", (req, res) => {})
//   .delete("/", (req, res) => {});

// app.get("/old", (req, res) => {
//   res.redirect(301, "/new");
// });

// app.get("/new", (req, res) => {
//   res.send("<h2>NEW</h2>");
// });

// app.listen(3000, err => {
//   if (err) {
//     console.log("there was a problem", err);
//     return;
//   }
//   console.log("listening on port 3000");
// });

// loading express in server.js
const express = require('express');
const app = express();
// Used to accept the JSON body.
app.use(express.json());


const port = 3000;

app.get('/', (req, res) => {
   res.send("Hello, AfterAcademy");
});

app.listen(port, () => {
   console.log(`Server is up at ${port}`);

//    app.get('/about', (req, res) => {
//     res.send("Hello, AfterAcademy!, We are inside about page...");
//  });

 app.post('/test', function (req, res) {
  res.send("POST request to '/' route");
});

// 1. POST a request.
//The below post service accepts a JSON body consisting of a key, "body" which is a string. 
// The below request would also send 200 OK success when passed the request.
// For testing if we pass the callback id (Any Number) it would accept that for now. 
// If a database or a third party database is connected then we can definately send the desired data.

app.post('/request', (req, res) => {
  
  // res.send(JSON.stringify(response));
  console.log('Got body:', req.body);
  res.sendStatus(200);
});

// 2. POST callback:
// The below request sends a string `STARTED` to indicate it's they received the request.

app.post('request-started', (req, res) => {
  
  // res.send(JSON.stringify(response));
  console.log('Got body:', req.body);
  res.sendStatus(204);
});

// 3. PUT callback:

app.put('/put-callback', (req, res) => {
  
  // res.send(JSON.stringify(response));
  console.log('Got body:', req.body);
  res.sendStatus(204);
});


});