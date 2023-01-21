/*
 * Title: sample handler
 * Description: sample handler
 * Author: Joy Mohajon
 * Date: 21-01-2023
 *
 */

// module scaffolding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
  console.log(requestProperties);
  callback(200, {
    message: "this is a sample handler",
  });
};

module.exports = handler;
