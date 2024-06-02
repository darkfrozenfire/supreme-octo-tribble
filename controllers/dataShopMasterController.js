
const fs = require('fs');
//get shopMasterModel
const allShop = require('./../models/shopMaster_model');

const shopmaster = [{               
    unique_id : '12345',
    register_no     : 'reg1234',
    shop_owner      : 'amit joshi',
    mobile          :  9634711198,
    total_customers : '30',
    city            : 'chennai',
    state           : 'tamilnadu',
    gst             : 'GSTP12345',
    cin             : 'CIN12343',
    pan             : 'samplepan',
    geo_location    : '12.12512,35.5265'
  }]; 



exports.getAllShops = async (request, response) => {
    try {
      const shops = await allShop.find().lean().exec();
       
      console.log(shops);
      const totalRecords = shops.length;  
      response.status(200).json({ 
        message: 'success',
        total_records: totalRecords,
        data: { 
          shops: shops
        }
      });
    } catch (error) {
      console.error('Error retrieving shops:', error);
      response.status(500).json({ 
        error: 'Error retrieving shops',
        details: error
      });
    }
  };





//retrive  shop with mobile number or with help of regestration number
exports.getSingleShop = (request,response) => {
    const req_register_no = request.params.register_no ;
    const req_mobile_no = request.params.mobile_number * 1 ;
    const searched_data = shopmaster.find(el => el.register_no === req_register_no || el.mobile === req_mobile_no); 

    if (!searched_data){

      return  response.status(404)
                      .json({ 
                            status :'fail',
                            message : 'invalid mobile number or register id'
                        }); 
    }

    response.status(200)
            .json({ 
                message :'success',
                searched_data
            });


};


//before create shop check body validation middleware for parameters in json input from endpoint
exports.checkCreateShopBody = (request,response,next) => {
    if(!request.body.mobile || !request.body.register_no ){
    return    response.status(400)
        .json({ 
            message :'Missing regestration or mobile number parameter',
        });
    }
    next();
};



//create shop
exports.createShop = (request,response) => {
    const success_response = request.body ;
    response.status(201)
            .json({ 
                message :'shop has been created successfully',
                data    : { 
                             success_response
                           }
            });
  
};

    