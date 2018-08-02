const request = require('request');


exports.getCities = async (req,res) => {
  var cityName = req.body.search;
  request({
    method: 'GET',
    uri:`https://api.sandbox.amadeus.com/v1.2/airports/autocomplete?apikey=GnRBM00bILjYAFLqCZEA1XnCFKPAwnGg&term=${cityName}&country=IN`
  }, function (error, response, body){
    console.log(body);
    if(!error && response.statusCode == 200){
      
     body = JSON.parse(body);
     if(body.length == 0){
       res.json({
         'success': false,
         msg: 'Either Source or Destination is wrong'
       })
     }
     else{
     res.json({
       'success': true,
       msg:"Cities fecthed Successfully",
       data: body
     })
     }
    //  console.log(originValue);
     
    }
  })

}


exports.check = async (req,res) => {
    console.log(req.body)
   
    //sabre API

    // const clientId = "V1:8wk6pkvaviov7zav:DEVCENTER:EXT"
    // const secretId = "w4SVh3gJ"
    // const origin = req.body.origin;
    // const dest = req.body.dest;
    // const d = req.body.date;
    // const accessToken = "T1RLAQJabE/KHP3QsDZo3YMeROADkUQDhhABMh3tqWcHgw9K3TH2IdZSAADAxt75Y/U8x9mvy3dfMVqTJ8X4otnCmPL1WoWFWri5FIl2lt5bCQvavbgsSitFHZ59tAVlSu8dcuwrtiuZl/OEsEbNwEaVihV9j9PsNlgkUsLASWbZGnSXpf8+/JuYmzbcSptHbPhEc+CpEDChUYZqLDiLE0nZkyA1gf/cYAdAh4Ivy+Nm48pmVSdt/jBN2RCpekeQJI2j3p+a2tP4z7Ba61Qp5lFq/r5P14K3AR/e4aGyw56HRLR6dZhbtqZqVayv"
    // request({
    //     method: 'GET',
    //     uri: `https://api-crt.cert.havail.sabre.com/v2/shop/flights/fares?origin=${origin}&destination=${dest}&departuredate=${d}&lengthofstay=15&sortby2=departuretime&pointofsalecountry=IN`,
    //     headers: {'Authorization': 'Bearer ' + accessToken}
    //   }, function (error, response, body){
    //     if(!error && response.statusCode == 200){
    //      body = JSON.parse(body);
    //       res.json({
    //           'success': true,
    //           data:body
    //       });
    //     }
    //   })


    //amadeus API


    //const apiKey = process.env.API_KEY;
// const apikey = "tCh0GDqllwJiVaWuuKEutSiSgd2KG6Xq"
    const origin = req.body.origin;
    const dest = req.body.dest;
    const d = req.body.originDate;
    const rd = req.body.returnDate;
    const preference = req.body.prefer;
    const opt = !req.body.option;


    let originValue = origin;
    let destinationValue = dest;
      // To get the city code




    //  request({
    //   method: 'GET',
    //   uri:`https://api.sandbox.amadeus.com/v1.2/airports/autocomplete?apikey=${apiKey}&term=${origin}&country=IN`
    // }, function (error, response, body){
    //   if(!error && response.statusCode == 200){
    //    body = JSON.parse(body);
    //    if(body.length == 0){
    //      res.json({
    //        'success': false,
    //        msg: 'Either Source or Destination is wrong'
    //      })
    //    }
    //    else{
    //    originValue = body[0].value;
    //    }
    //   //  console.log(originValue);
       
    //   }
    // })

    // request({
    //   method: 'GET',
    //   uri:`https://api.sandbox.amadeus.com/v1.2/airports/autocomplete?apikey=${apiKey}&term=${dest}&country=IN`
    // }, function (error, response, body){
    //   if(!error && response.statusCode == 200){
    //    body = JSON.parse(body);
    //    if(body.length == 0){
    //     res.json({
    //       'success': false,
    //       msg: 'Either Source or Destination is wrong'
    //     })
    //   }
    //   else{
    //     destinationValue= body[0].value;

    //     console.log(destinationValue);
    //   }
       
    //   }
    //  })

    if(preference == "all"){
      console.log('har');
      
      setTimeout(function(){
        let url = `https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?apikey=GnRBM00bILjYAFLqCZEA1XnCFKPAwnGg&origin=${originValue}&destination=${destinationValue}&departure_date=${d}&nonstop=${opt}&currency=INR`
        request({
              method: 'GET',
              uri: url
            }, function (error, response, body){
              if(!error && response.statusCode == 200){
               body = JSON.parse(body);   
               console.log(body);
                     
                res.json({
                    'success': true,
                    data:body
                });
              }
              else{
                res.json({
                  'success':false,
                  msg:response
                })
              }
            })
  
  
      },3000);
    }
    else{
      setTimeout(function(){
        let url = `https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?apikey=GnRBM00bILjYAFLqCZEA1XnCFKPAwnGg&origin=${originValue}&destination=${destinationValue}&departure_date=${d}&include_airlines=${preference}&nonstop=${opt}&currency=INR`
        request({
              method: 'GET',
              uri: url
            }, function (error, response, body){
              if(!error && response.statusCode == 200){
               body = JSON.parse(body); 
               console.log("inside", body);
                       
                res.json({
                    'success': true,
                    data:body
                });
              }
              else{
                res.json({
                  'success':false,
                  msg: response
                })
              }
            })
  
  
      },3000);
  
    }
}
