
const fs = require('fs');

//================================customer functions =============================

exports.singleCustomer = (request,response) => {
    response.status(201)
    .json({ 
        message :'get customer method not implemented yet',
    });
};

exports.createCustomer = (request,response) => {
    response.status(201)
    .json({ 
        message :'create customer method not implemented yet',
    });
};


exports.updateCustomer = (request,response) => {
    response.status(201)
    .json({ 
        message :'update customer method not implemented yet',
    });
};

exports.deleteCustomer = (request,response) => {
    response.status(201)
    .json({ 
        message :'delete customer method not implemented yet',
    });
};

exports.getAllCustomers = (request,response) => {
    const success_response = request.body ;
    response.status(201)
    .json({ 
        message :'all customer retrive method not implemented yet',
    });
};







//================================customer function ends==========================