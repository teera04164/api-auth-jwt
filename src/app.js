const env = require('./config/env');
const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const mongoose = require('mongoose');
const database = require('./config/database');
const cors = require('cors');
const bodyParser = require('body-parser');
const RateLimit = require('./config/rate-limit');
const routes = require('./routes');
const  open = require('open')

// .env file configuration
env.get();

// Express initialization
const app = express();

// CORS initialization
app.use(cors());

// Helmet initialization
app.use(helmet());

// compress all responses
app.use(compression());

// MongoDB connection
mongoose.connect(database.mongodb.uri, {
    useNewUrlParser: true ,
    user: database.mongodb.username,
    pass: database.mongodb.password
})
mongoose.Promise = global.Promise;

// On connection error
mongoose.connection.on('error', (error) => {
    console.log('Database error: ' + error);
});

// On successful connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database');
});

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
//Basic rate-limiting middleware
app.enable('trust proxy');
app.use(RateLimit.limiter());

// Routes
app.use('/', routes);

const server = app.listen(process.env.PORT || 8000, () => {
    const port = server.address().port;
    console.log('app running on port', port);
    // console.log(process.env.PAR);
    
  //  open(process.env.MONGO_DB_URL_LOCAL+port);
});