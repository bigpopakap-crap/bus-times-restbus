var restbus = require('restbus');

var port = process.env.PORT || 8080;

restbus.listen(port, function() {
  console.log(`Listening on port ${port}`);
});