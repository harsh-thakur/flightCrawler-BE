const request = require('request');

exports.check = async (req,res) => {
    console.log(req.body)
    
    const clientId = "V1:8wk6pkvaviov7zav:DEVCENTER:EXT"
    const secretId = "w4SVh3gJ"
    const origin = req.body.origin;
    const dest = req.body.dest;
    const d = req.body.date;
    const accessToken = "T1RLAQJabE/KHP3QsDZo3YMeROADkUQDhhABMh3tqWcHgw9K3TH2IdZSAADAxt75Y/U8x9mvy3dfMVqTJ8X4otnCmPL1WoWFWri5FIl2lt5bCQvavbgsSitFHZ59tAVlSu8dcuwrtiuZl/OEsEbNwEaVihV9j9PsNlgkUsLASWbZGnSXpf8+/JuYmzbcSptHbPhEc+CpEDChUYZqLDiLE0nZkyA1gf/cYAdAh4Ivy+Nm48pmVSdt/jBN2RCpekeQJI2j3p+a2tP4z7Ba61Qp5lFq/r5P14K3AR/e4aGyw56HRLR6dZhbtqZqVayv"
    request({
        method: 'GET',
        uri: `https://api-crt.cert.havail.sabre.com/v2/shop/flights/fares?origin=${origin}&destination=${dest}&departuredate=${d}&lengthofstay=15&sortby2=departuretime&pointofsalecountry=IN`,
        headers: {'Authorization': 'Bearer ' + accessToken}
      }, function (error, response, body){
        if(!error && response.statusCode == 200){
         body = JSON.parse(body);
          res.json({
              'success': true,
              data:body
          });
        }
      })
    
}