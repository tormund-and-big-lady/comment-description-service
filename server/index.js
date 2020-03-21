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

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/javascript');
  next();
});

// serving static client front-end files
app.use(express.static(path.resolve(__dirname, '../client/dist')));

// router
app.use('/navbar', router)

// establish port to listen on
let port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Navbar-server is listening on port ${port}`));