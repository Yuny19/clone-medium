const express = require('express');
const ENV = require('dotenv');
const mongoose = require('mongoose');
const multer = require('multer');
const upload = multer();
var bodyParser = require('body-parser');

ENV.config();

const app = express();
const cors = require('cors');
const port = process.env.PORT;

mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`, {useNewUrlParser: true, useUnifiedTopology: true});

const userRouter = require('./routers/user.router');
const tagRouter = require('./routers/tag.router');
const contentRouter = require('./routers/content.router');


// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('public')); 

app.use(cors());

app.use('/user', userRouter);
app.use('/tag', tagRouter);
app.use('/content', contentRouter);



app.get('*', (req, res) => {
    res.status(404).json({
        message: 'not found'
    })
})

app.listen(port, () => {
    console.log(`server run in here ${port}`)
})