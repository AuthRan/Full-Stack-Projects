const express = require('express');
const mongoose = require('mongoose');
const enquiryRoutes = require('./app/routes/web/enquiryRoutes');
let cors = require('cors');
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(cors())
//Routes
app.use('/api/website/enquiry', enquiryRoutes)

//MongoDb connection
mongoose.connect(process.env.DBURL).then(() => {
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT || 3000, () => {
        console.log('Server is listening on ', process.env.PORT);
    })
}).catch((err) => {console.log(err)})





