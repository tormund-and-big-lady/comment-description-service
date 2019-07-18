const mongoose = require('mongoose');
require('dotenv').config()

let DB_URL = (process.env.NODE_ENV === 'development') ? 'mongodb://localhost/fec-navbar' : `mongodb+srv://morganl:${process.env.DB_PW}@tabl-fec-nav-bar-cluster-hokx3.mongodb.net/fec-navbar?retryWrites=true&w=majority`

mongoose.connect(DB_URL, {useNewUrlParser: true})
  .then(() => console.log('Connection to mongoDB is successful!'))
  .catch(err => console.log(err));


