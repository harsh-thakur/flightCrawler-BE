const request = require('request');

exports.check = async (req,res) => {
    console.log('har har mahadev');
    
    const clientId = "V1:8wk6pkvaviov7zav:DEVCENTER:EXT"
    const secretId = "w4SVh3gJ"
    const accessToken = "T1RLAQIh/H07mxBav0IvOG82NQi1rXKWJxBPTP4rTYjGpwvSW1iUzMDAAADAZuFEMVrlxX9ZxX50qMUkV6c5Ll1TadFWqY4DiAoYonm1iOUq8x/yeLl1mPvsgZ14/9sIzKGFXb9rDnv+i+Vpl9pO1srv0C1zCVO5cba4cri/gMSHYtxQrErEBVpQRcFxqu314CYxdAuoeriABfqz3eAIraIoT6X+4XGfTmdvqkGB5rqCyvlrvl4XpBh7sOcGuxg0gTliU/E980YqHUh9b95orUEEbY96yMD5prxNZ4yBSz4oJP6AauM1VAs/0XUt"
    request({
        method: 'GET',
        uri: 'https://api-crt.cert.havail.sabre.com/v1/shop/flights/cheapest/fares/DEL?pointofsalecountry=IN',
        headers: {'Authorization': 'Bearer ' + accessToken}
      }, function (error, response, body){
        if(!error && response.statusCode == 200){
         body = JSON.parse(body);
          res.json(body);
        }
      })
    
}