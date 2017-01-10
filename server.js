const express = require('express');
const path = require('path');

const app = express();

// additional logic is added here.
// different routes / db connections.


if (process.env.NODE_ENV != 'production') {
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpack = require('webpack');
  const webpackConfig = require('./webpack.config.js');

  app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
  // allows the dist folder to be accessible by any requesting the info
  app.use(express.static('dist'));
  // When anyone makes a request to any path, serve them the index.html file from the dist folder
  // This line of code is specifically required for compatibility with react-router specifically the browserHistory module.
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}

var PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Listening on port 3000');
});

// to run in production use command
// set NODE_ENV=production& node server.js
