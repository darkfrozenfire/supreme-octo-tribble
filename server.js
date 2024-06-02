const mongoose = require('mongoose');// mongoose library for mongodb

const dotenv = require('dotenv');
const app = require('./app');
// config values from dotenv package
dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace( '<PASSWORD>', process.env.DATABASE_PASSWORD ); // add password from configenvironment
  
mongoose.connect(DB)
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch(error => {
    console.error('Database connection error:', error);
  });



const port = process.env.PORT ;  // set port in config.env file 

app.listen(port, ()=> {
    console.log(`port ${port} running successfully `);
});

