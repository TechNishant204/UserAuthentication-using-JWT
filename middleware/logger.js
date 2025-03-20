// Middleware function to log the request method and URL to the console

function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}

module.exports = logger;
