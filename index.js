/*
 * Title: Uptime monitoring application
 * Description: A RESTFul API to monitor up or down time of user defined links
 * Author: Joy Mohajon
 * Date: 19-01-2023
 *
 */

// dependencies
const http = require("http");
const url = require("url");
const fs = require("fs");
const { StringDecoder } = require("string_decoder");
const { handleReqRes } = require("./helpers/handleReqRes");

// app object - module scaffolding
const app = {};

//configuration
app.config = {
  port: 3000,
};

// create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log(`listening on port ${app.config.port}`);
  });
};

// handle requests response
app.handleReqRes = handleReqRes;

app.createServer();
