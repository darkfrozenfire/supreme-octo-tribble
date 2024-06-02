
 const express = require('express');
 const customerController = require('./../controllers/dataCustomerController');

const router = express.Router();



router
   .route('/')
   .get(customerController.getAllCustomers);

router
   .route('/:customerid')
   .get(customerController.singleCustomer)
   .post(customerController.createCustomer)
   .put(customerController.updateCustomer)
   .delete(customerController.deleteCustomer) ;





module.exports = router;