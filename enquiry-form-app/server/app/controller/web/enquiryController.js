const enquiryModel = require("../../models/enquiry.model");

let enquiryInsert = (req, res) => {
    let {email, name, phone, msg} = req.body;
    let enquiry = new enquiryModel({
        email,
        name ,
        phone ,
        msg         
    })
    enquiry.save().then(() => {
        res.send({status : 1, message : "Enquiry Saved Successfully"});
    }).catch((err) => {
        res.send({status : 0, message : "Error while saving enquiry ", err});
    })
}

let enquiryList = async(req, res) => {
    let enquiry = await enquiryModel.find();
    res.send({status : 1, enquiryList:enquiry});
}

module.exports = {enquiryInsert, enquiryList};