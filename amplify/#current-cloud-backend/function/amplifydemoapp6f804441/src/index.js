 
 
exports.handler = async (event) => {
    console.log(event);
    const customerID = event.pathParameters.customerID
    const customer = { 'customerID': customerID, 'customerName': "customer" + customerID }
    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
      headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*"
      }, 
        body: JSON.stringify('customer'),
    };
};
