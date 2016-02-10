/**
 * Created by bpc on 14/11/15.
 */

var mongoose = require('mongoose');

var itemSchema = mongoose.Schema({
    item_code :{type:String,required:true,unique:true},
    brand : {type:String,required:true},
    model : {type:String,required:true},
    category:{type:String,required:true},
    sub_category:{type:String,required:true},
    part_no : {type:String,required:true,unique:true},
    identity_no : {type:Number},
    description: String,
    quantity :{type:Number,required:true},
    unitprice :{type:Number,required:true},
    pro_pic : String,
    qr_code : String,
    last_updated_time : {type:Date,default:Date.now}


});

module.exports = mongoose.model('Items',itemSchema);

