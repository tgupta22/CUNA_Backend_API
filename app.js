"use strict";
const express = require("express");
const app = express();

app
  .get("/", (req, res) => {
    console.log(req.url);
    res.send("<h1>Hello</h1>"); //determine the content-type automatically
  })
  .post("/", (req, res) => {})
  .patch("/", (req, res) => {})
  .put("/", (req, res) => {})
  .delete("/", (req, res) => {});

app.get("/old", (req, res) => {
  res.redirect(301, "/new");
});

app.get("/new", (req, res) => {
  res.send("<h2>NEW</h2>");
});

app.listen(3000, err => {
  if (err) {
    console.log("there was a problem", err);
    return;
  }
  console.log("listening on port 3000");
});