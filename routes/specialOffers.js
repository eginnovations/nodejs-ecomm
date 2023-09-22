const express = require("express");
const product = require("../models/product");
const router = express.Router();
const Product = require("../models/product");
const Category = require("../models/category");

router.get("/", async(req, res)=>{
    
    let page = parseInt(req.query.page) || 1;
    const perPage = 5;
    
    try{
       

        const products = await Product.find({})
        .where('price').lte(25)
        .sort("-createdAt")
        .skip(perPage * page - perPage)
        .limit(perPage)
        .populate("category");

        const count = await Product.count();

        res.render("shop/specialOffers", {
            pageName: "Special Offers Page",
            products,
            pages: Math.ceil(count/perPage)
        })
    }catch(error){
        console.log(error);
        res.redirect("/");
    }
})


module.exports = router;