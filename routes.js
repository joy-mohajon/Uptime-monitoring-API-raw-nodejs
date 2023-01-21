/*
 * Title: routes
 * Description: Application routes
 * Author: Joy Mohajon
 * Date: 21-01-2023
 *
 */

// dependencies
const { sampleHandler } = require("./handlers/routeHandlers/sampleHandler");

const routes = {
  sample: sampleHandler,
};

module.exports = routes;
