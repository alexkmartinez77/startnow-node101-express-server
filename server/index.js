// here we're importing your express app
const server = require('./app'); //an instance of the app created in app.js

// We're telling the app to listen for network requests on port 3000
server.listen(3000, function() {                      // actually gets the the server up and running
  console.log('Server is listening on http://localhost:3000');
});
