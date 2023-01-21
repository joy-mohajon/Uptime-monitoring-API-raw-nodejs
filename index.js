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
app.handleReqRes = (req, res) => {
  // request handle
  // get the url and parse it
  const parseUrl = url.parse(req.url, true);
  const path = parseUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, "");
  const method = req.method.toLowerCase();
  const queryStringObject = parseUrl.query;
  const headersObject = req.headers;

  const decoder = new StringDecoder("utf-8");
  let realData = "";

  req.on("data", (buffer) => {
    realData += decoder.write(buffer);
  });

  req.on("end", () => {
    realData += decoder.end();
    console.log(realData);
    res.end(realData);
  });

  // response handle
  res.end(realData);
};

app.createServer();
