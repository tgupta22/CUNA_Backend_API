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

app.post('/request-started', (req, res) => {
  
  console.log('Got body:', req.body);
  res.sendStatus(204);
});

// 3. PUT callback:
// The below request would PUT status updates to this callback URL, each which will have 
//a json object with the keys of `status` and `detail`. The status will be one of `PROCESSED`,
//`COMPLETED` or `ERROR`. The detail with be a text string.


app.put('/put-callback', (req, res) => {
  
  console.log('Got body:', req.body);
  res.sendStatus(204);
});

// 4. GET status request.
// Passing this url : localhost:3000/status?id=1&status=PROCESSED&detail=COMPLETED&body=Started on Postman to accomodate the unique ID,
// status, detial and original body. If it is attahced to a database we can modify the url accordingly so it can take up less hard coded
// values.

  app.get('/status', function(req, res) {
  const user_id = req.query.id;
  const status = req.query.status;
  const detail = req.query.detail;
  const body = req.query.body;

  res.send({
    'user_id': user_id,
    'status': status,
    'detail': detail,
    'body': body
  });
});

});