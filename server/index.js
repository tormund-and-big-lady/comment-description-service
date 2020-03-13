const express = require('express')
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./router')

let app = express();

// middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// router
app.use('/navbar', router)

// serving static client front-end files
app.use(express.static(path.resolve(__dirname, '../client/dist')));

// establish port to listen on
let port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Navbar-server is listening on port ${port}`));