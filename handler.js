var fs = require('fs');

module.exports = function handler(request, response) {
    var url = request.url;
    if (url.length === 1) {
        fs.readFile(__dirname + '/index.html', function(error, index) {
            if (error) {
                console.log(error);
                response.end();
            } else {
                response.end(index);
            }
        });
    }
};
