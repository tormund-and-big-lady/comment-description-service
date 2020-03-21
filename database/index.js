const mongoose = require('mongoose');
require('dotenv').config()

let DB_URL = (process.env.NODE_ENV === 'development') ? 'mongodb://localhost/fec-nordstrom' : `mongodb+srv://morganl:${process.env.DB_PW}@nordstrom-ux-cluster-hokx3.mongodb.net/fec-nordstrom?retryWrites=true&w=majority`

mongoose.connect(DB_URL, {useNewUrlParser: true})
  .then(() => console.log('Connection to mongoDB is successful!'))
  .catch(err => console.log(err));


