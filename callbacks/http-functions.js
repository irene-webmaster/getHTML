var https = require('https');

module.exports = function getHTML (options, callback) {
    https.get(options, function (response) {

    response.setEncoding('utf8');

    var dataStr = '';

    response.on('data', function (data) {
      dataStr += data;
    });

    response.on('end', function () {
      console.log('Response stream complete.');

      callback(dataStr);
    });

  });
};