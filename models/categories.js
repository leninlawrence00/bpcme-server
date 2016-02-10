/**
 * Created by bpc on 14/11/15.
 */
var mongoose = require('mongoose');

var categorySchema = new mongoose.Schema({
    name : {type:String,unique:true,required:true}
})

module.exports = mongoose.model('Category',categorySchema);
