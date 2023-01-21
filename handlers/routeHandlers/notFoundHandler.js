/*
 * Title: not found
 * Description: Not found handler
 * Author: Joy Mohajon
 * Date: 21-01-2023
 *
 */

// module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
  console.log(requestProperties);
  callback(404, {
    message: "this url is not found",
  });
};

module.exports = handler;
