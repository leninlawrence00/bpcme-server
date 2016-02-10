/**
 * Created by bpc on 14/11/15.
 */

var express = require('express');
var router = express.Router();
var multer = require('multer');
var Items = require('../models/items.js');
var Brands = require('../models/brands');
var Models = require('../models/model');
var Category = require('../models/categories.js')
var SubCategory = require('../models/sub_category.js');
var path = require('path');
var crypto = require('crypto');

var storage = multer.diskStorage({
    destination: '../public/QRcode',
    filename: function (req, file, cb) {
        crypto.pseudoRandomBytes(16, function (err, raw) {
            if (err) return cb(err)

            cb(null, raw.toString('hex') + path.extname(file.originalname))
        })
    }
})

var upload = multer({ storage: storage })
router.use(function timeLog(req,res,next){
    next();
})

router.get('/viewitems',function(req,res){
    //res.render('items');
    Items.find({},function(err,data){
        if(err)
            return res.json({status:false,code:o,errmsg:err})
        res.render('viewitems',{items:data});
    })
})
/*router.get('/additem',function(req,res){
    Brands.find({},function(err,data){
        if(err)
            res.json({status:0,errmsg:err});
        //res.json(data);
        Models.find({},function(err1,modelsdata){
            if(err1)
                res.json({status:0,errmsg:err1});
            Category.find({},function(err2,categorydata){
                if(err2)
                  return res.json({status:0,errmsg:err2});
                SubCategory.find({},function(err3,subdata){
                    if(err3)
                      return res.json({status:0,errmsg:err3});
                    res.render('items',{brands:data,models:modelsdata,categories:categorydata,subcategory:subdata});
                })
            })
           // res.render('items',{brands:data,models:modelsdata});
        })

    })

})

*/



router.post('/',upload.fields([{ name: 'qr_code'}, { name: 'pro_pic'}]), function(req,res){
    var item = new Items();
    //console.log(req.file.filename);
    item.item_code = req.body.item_code;
    item.category  = req.body.category;
    item.sub_category = req.body.sub_category;
    item.brand = req.body.brand;
    item.model = req.body.model;
    item.part_no = req.body.part_no;
    item.description = req.body.description;
    item.quantity = req.body.quantity;
    item.unitprice = req.body.unitprice;

    item.qr_code = req.files.qr_code[0].filename;
    item.pro_pic = req.files.pro_pic[0].filename;
    item.identity_no = req.body.identity;

   item.save(function(err,data){
        if(err)
            res.json({status:0,errmsg:err})
         res.json({status:1,data:data});
        //res.redirect('./viewitems');
    });




})

router.get('/',function(req,res){
    Items.find({},function(err,data){
        if(err)
            res.json({status:0,errmsg:err});
        res.json({status:1,data:data});

    })
})

 module.exports = router;