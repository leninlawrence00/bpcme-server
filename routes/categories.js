/**
 * Created by BPC-ME on 2/9/2016.
 */
var express = require('express');
var router = express.Router();
var Category = require('../models/categories');

/* GET home page. */
router.get('/', function(req, res, next) {
    Category.find({},function(err,data){
        if(err)
            return res.json({status:false,code:0,errmsg:err});
        res.json({status:true,code:1,categories:data});
    })
});

module.exports = router;
