// Copyright IBM Corp. 2015. All Rights Reserved.
// Node module: loopback-example-middleware
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

module.exports = function() {
  return function(err, req, res, next) {
    err = req.app.buildError(err);
    next(err);
  };
};
