var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html'
};

function getAndPrintHTML(options) {

  https.get(options, function (response) {

    response.setEncoding('utf8');

    var dataStr = '';

    response.on('data', function (data) {
      dataStr += data;
    });

    response.on('end', function() {
      console.log('Response stream complete.');
      console.log(dataStr);
    });

  });

}

getAndPrintHTML(requestOptions);