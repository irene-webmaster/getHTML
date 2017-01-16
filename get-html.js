var https = require('https');

function getHTML (options, callback) {
  https.get(options, function (response) {

    response.setEncoding('utf8');

    var dataStr = '';

    response.on('data', function (data) {
      dataStr += data;
    });

    response.on('end', function () {
      console.log('Response stream complete.');

      // console.log(dataStr);
      printHTML(dataStr);
    });

  });

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions);