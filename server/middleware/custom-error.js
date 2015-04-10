module.exports = function() {
  return function(err, req, res, next) {
    err = req.app.buildError(err);
    next(err);
  }
}
