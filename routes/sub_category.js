/**
 * Created by BPC-ME on 2/2/2016.
 */

var express = require('express');
var sub_categoryRouter = express.Router();
var SubCategory = require('../models/sub_category.js');

sub_categoryRouter.use(function(req,res,next){
    next();
})

sub_categoryRouter.post('/add_sub_category',function(req,res){
    var sub_category = new SubCategory();
    sub_category.name = req.body.name;
    sub_category.save(function(err,cat){
        if(err)
            return res.json({status:false,code:0,errmsg:err})
        res.json({status:true,code:1,category:cat})
    })
})

module.exports = sub_categoryRouter;