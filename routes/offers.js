const express = require("express");
const router = express.Router();
const Product = require("../models/product");

router.get("/", async (req, res) => {
  res.render("shop/offers", {
    pageName: "Offers Page",
  });
})

router.get("/getDetails", async (req, res) => {
  try {
    const products = await Product.find({})
      .where('price').lte(41)
      .sort("-createdAt")
      .limit(3)
      .populate("category");
    res.status(200).json(products)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

router.get("/offerJson", async (req, res) => {
  const products = await Product.find({})
  try{
    res.send(products)
    res.status(200);
  }catch(error){
    res.send("Error while fetching from db");
  }
});

module.exports = router;