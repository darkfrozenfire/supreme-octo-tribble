const express = require('express');

const shopController = require('./../controllers/dataShopMasterController');

const router = express.Router();

//get shop list
  router
  .route('/list')
  .get(shopController.getAllShops);


  //retrive  shop with mobile number or with help of regestration number
  router
  .route('/getshopdetails/:mobile_number/:register_no?')
  .get(shopController.getSingleShop);

  //create shop
  router
  .route('/createshop')
  .post(shopController.checkCreateShopBody , shopController.createShop);


module.exports = router;