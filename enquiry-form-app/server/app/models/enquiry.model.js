let mongoose = require('mongoose');
let enquirySchema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true
    },
    name : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    msg : {
        type : String,
        required : true
    }
});

let enquiryModel = mongoose.model('Enquiry', enquirySchema);
module.exports = enquiryModel;