/**
 * Created by BPC-ME on 2/2/2016.
 */

var mongoose = require('mongoose');

var sub_categorySchema = new mongoose.Schema({
    name : {type:String,unique:true,required:true}
})

module.exports = mongoose.model('SubCategory',sub_categorySchema);
