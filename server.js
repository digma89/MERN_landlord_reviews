const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const reviews = require('./routes/api/reviews');

const app = express();

//BodyParser Middleware
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

//Connect to mongo
mongoose
    .connect(db,{ useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

//Use routes
app.use('/api/reviews', reviews);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server sarted on port ${port}`));