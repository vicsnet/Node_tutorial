
const request = require('./request.js');

const response = require('./response.js');

function makeRequest(url, data){
    request.send(url, data);

    response.read();
}

const responseData =makeRequest('https://google.com', 'hello');

console.log(responseData)