const request = require('./request.js');
const response = require('./response.js');


function makeRequest(url, data){
    request.send(url,data);
    return response.read();
}

const responseData = makeRequest('https://www.google.com', 'hello')
console.log(responseData); // decrypted data