const express = require('express');
const app = express();
app.use(express.json()); // check body request sent by user
// app.use(express.static(`${__dirname}/public`));   // show any static file directly from directory public 

// ===================add routers from routes dirrectory ======================
 const shopMasterRouter = require('./routes/shopmasterroutes');
 const customerRouter = require('./routes/customerroutes');
//============================================================================


 // =====================mount routes =======================================================
      app.use('/api/v1/shopmaster/', shopMasterRouter);
      app.use('/api/v1/customer', customerRouter);
// =====================mount routes =========================================================

module.exports = app ;
