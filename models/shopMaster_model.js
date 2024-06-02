const mongoose = require('mongoose');

// Define the schema
const shopMasterSchema = new mongoose.Schema({
  unique_id: {
    type: String,
    required: true,
    unique: true,
    maxlength: [40, 'A unique id must have less or equal then 40 characters']
  },
  register_no: {
    type: String,
    required: true
  },
  shop_owner: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function(v) {
        return /^\d{10}$/.test(v); // Ensures the mobile number is exactly 10 digits
      },
      message: props => `${props.value} is not a valid mobile number!`
    }
  },
  total_customers: {
    type: Number,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  gst: {
    type: String,
    required: true
  },
  cin: {
    type: String,
    required: true
  },
  pan: {
    type: String,
    required: true
  },
  geo_location: {
    type: String,
    required: true
  }
});

// Create the model
const ShopMasterModel = mongoose.model('Rewardify', shopMasterSchema, 'shop_master');
module.exports = ShopMasterModel;
