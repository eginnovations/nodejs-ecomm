const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
const Product = require("../models/product");
const Category = require("../models/category");
const faker = require("faker");

exports.seedDB = async function () {
  faker.seed(0);

  //----------------------Backpacks
  const backpacks_titles = [
    "Classic Blue Backpack",
    "Black Fjallraven Backpack",
    "Brown and Green Leather Backpack",
    "Grey Stylish Backpack",
    "Elegant Black Backpack",
    "Practical Blue Backpack With Leather Straps",
    "Soft Classic Biege Backpack",
    "Practical Durable Backpack",
    "Comfortable Laptop Backpack",
    "Extra Large Grey Backpack",
  ];
  const backpacks_imgs = [
    "/images/backpacks_imgs/photo-1553062407-98eeb64c6a62-BI-1.avif",
    "/images/backpacks_imgs/photo-1562546106-b9cb3a76a206-BI-2.avif",
    "/images/backpacks_imgs/photo-1577733966973-d680bffd2e80-BI-3.avif",
    "/images/backpacks_imgs/photo-1546938576-6e6a64f317cc-BI-4.avif",
    "/images/backpacks_imgs/photo-1585916420730-d7f95e942d43-BI-5.avif",
    "/images/backpacks_imgs/pexels-photo-2905238-BI-6.webp",
    "/images/backpacks_imgs/pexels-photo-2422476-BI-7.jpg",
    "/images/backpacks_imgs/pexels-photo-1545998-BI-8.jpeg",
    "/images/backpacks_imgs/3361015646_303a2d0571_b-BI-9.jpg",
    "/images/backpacks_imgs/backpack-2634622_1280-BI-10.jpg",
  ];

  //--------------------Travel Bags
  const travel_titles = [
    "Stylish Pastel Pink Travel Bag",
    "A Fahionable Set of Two Pink Travel Bags",
    "White and Black Hard Luggage",
    "Rainbow Dotted Duffle Bag Luggage",
    "Blue and Gray Classic Suitcase",
    "Light Blue Hard Luggage",
    "Black Leather Vintage Suitcase",
    "A Set of Three Large Travel Bags",
    "Two Stylish Light Green Travel Bags With Different Sizes",
    "Simple Blue Luggage with Many Compartments",
  ];

  const travel_imgs = [
    "/images/travel_imgs/travel-bag-hard-and-bag-TI-1.jpg",
    "images/travel_imgs/luggage-metallic-luguagge-case-TI-2.jpg",
    "/images/travel_imgs/photo-1565026057447-bc90a3dceb87-TI-3.avif",
    "/images/travel_imgs/duffle-bag-4287485_960_720-TI-4.png",//notfound
    "/images/travel_imgs/duffle-bag-4287485_960_720-TI-4.png",
    "/images/travel_imgs/suitcases-3948389_960_720-TI-6.png",
    "/images/travel_imgs/travel-bag-4326738_960_720-TI-7",
    "/images/travel_imgs/various-bag-bags-luggage-TI-8.jpg",
    "/images/travel_imgs/travelvarious-bag-bags-holiday-TI-9.jpg",
    "/images/travel_imgs/travel-bag-hard-and-bag-TI-10.jpg",
  ];

  //--------------------Briefcases
  const briefcases_titles = [
    "Aluminium Metal Suitcase",
    "Black Leather Durable Suitcase",
  ];

  const briefcases_imgs = [
    "/images/briefcases_imgs/Aluminium_Briefcase-BR-1.jpg",
    "/images/briefcases_imgs/1751-black-leather-briefcase-on-a-white-background-pv-BR-2.jpg",
  ];

  //--------------------Mini Bags
  const miniBags_titles = [
    "Pink Leather Crossbody Bag",
    "Stylish Pink Crossbody Bag",
    "Mini Black Carra Shoulder Bag",
    "White Leather Mini Bag with Crossbody Strap",
    "Blue Jeans Mini Bag",
    "Biege Be Dior Mini Bag with Crossbody Strap",
    "Red Be Dior Mini Bag with Crossbody Strap",
    "Light Blue Mini Bag with Golden Strap",
    "Light Green Mini Bag with Golden Strap",
    "Pastel Pink Mini Bag with Golden Strap",
    "Biege Leather Crossbody Bag",
    "White Leather Crossbody Bag",
    "Elegant White Mini Bag with Silver Strap",
    "Simple Red Mini Bag",
  ];
  const miniBags_imgs = [
    "/images/miniBags_imgs/photo-1566150905458-1bf1fc113f0d-MI-1.avif",
    "/images/miniBags_imgs/DKNY_Mini_Flap_Crossbody_W_-_SS_Crossbody_R1513004_Kalbsleder_beige_(1)_(16080518124)-MI-2.jpg",
    "/images/miniBags_imgs/handbag-bag-today-the-postwoman-fashion-style-skin-MI-3.jpg",
    "/images/miniBags_imgs/handbags-white-fashion-bag-shoulder-bag-MI-4.jpg",
    "/images/miniBags_imgs/camera_bag_scene_package_fashion-900156-MI-5.jpg",
    "/images/miniBags_imgs/bag_dior_x_n-867928-MI-6.jpg",
    "/images/miniBags_imgs/bag_dior_u-867943-MI-7.jpg",
    "/images/miniBags_imgs/bag_fashion_style-518819-MI-8.jpg",
    "/images/miniBags_imgs/bag_fashion_style-518820-MI-9.jpg",
    "/images/miniBags_imgs/bag_fashion_style-518821-MI-10.jpg",
    "/images/miniBags_imgs/bag_fashion_style-518803-MI-11.jpg",
    "/images/miniBags_imgs/bag_fashion_style-518804-MI-12.jpg",
    "/images/miniBags_imgs/photo-1564422167509-4f8763ff046e-MI-13.avif",
    "/images/miniBags_imgs/bag_crimson_product_photos_padlock_bag_women_bags_dot_white-1000331-MI-14.jpg",
  ];

  //--------------------Large Handags

  const largeHandbags_titles = [
    "Elegant Shiny Brown Leather Handbag",
    "Black Leather Handbag with Golden Chains",
    "Elegant Black Leather Handbag",
    "Stylish Blue Handbag with its Purse",
    "A set of Two Elegant Handbags",
    "Practical Blue Leather Handbag with its Purse",
    "Simple Black Leather Handbag",
    "Golden Leather Handbag",
    "Shiny Black Leather Handbag",
    "Gray and Yellow Flowery Shoulder Bag",
    "Blue and Brown Leather Handbag with Shoulder Strap",
  ];
  const largeHandbags_imgs = [
    "/images/largeHandbags_imgs/handbag_purse_fashion_bag_female_style_women_elegance-703150-LI-1.jpg",
    "/images/largeHandbags_imgs/handbag_purse_fashion_bag_female_women_accessory_modern-703145-LI-2.jpg",
    "/images/largeHandbags_imgs/handbag_purse_fashion_bag_female_style_women_lady-703156-LI-3.jpg",
    "/images/largeHandbags_imgs/photo-1564422170194-896b89110ef8-LI-4.avif",
    "/images/largeHandbags_imgs/photo-1564222256577-45e728f2c611-LI-5.avif",
    "/images/largeHandbags_imgs/online-shopping-lisaswardrobe-handbags-shopping-LI-6.jpg",
    "/images/largeHandbags_imgs/handbag-black-gold-LI-7.jpg",
    "/images/largeHandbags_imgs/bag-handbag-haberdashery-LI-8.jpg",
    "/images/largeHandbags_imgs/package-briefcase-leather-bags-LI-9.jpg",
    "/images/largeHandbags_imgs/vera-bradley-purse-handbag-shoulder-bag-LI-10.jpg",
    "/images/largeHandbags_imgs/purse-bag-handbag-fashion-LI-11.jpg",
  ];

  //-----------------------Purses
  const purses_titles = [
    "Hot Pink Leather Purse",
    "Glittery Black Purse with Golden Strap",
    "Practical Black Leather Purse",
    "Red Leather Pouche with Free Earrings",
    "Lavender Leather Purse",
    "White and Black Snakeskin Purse",
    "Dark Brown Simple Purse",
    "Red Kipling Pouche",
    "Biege Kipling Pouche",
  ];
  const purses_imgs = [
    "/images/purses_imgs/bag_fashion_style-518806-PI-1.jpg",
    "/images/purses_imgs/photo-1564222195116-8a74a96b2c8c-PI-2.avif",
    "/images/purses_imgs/wallet_black_clutch_purse_leather_fashion_style_accessory-952715-PI-3.jpg",
    "/images/purses_imgs/purse_handbag_fashion_bag_style_design_leather_accessory-780266-PI-4.jpg",
    "/images/purses_imgs/wallet_purple_wallet_purple_money_purse_billfold_lavender_fashion-863005-PI-5.jpg",
    "/images/purses_imgs/photo-1563904092230-7ec217b65fe2-PI-6.avif",
    "/images/purses_imgs/leather-purse-isolated-background-PI-7.jpg",
    "/images/purses_imgs/bag_handbag_purse_pink_red_fashion_glamour_accessory-952105-PI-8.jpg",
    "/images/purses_imgs/bag_purse_handbag_fashion_style_accessory_white-1336949-PI-9.jpg",
  ];

  //-----------------Totes

  const totes_titles = [
    "Plain White Cotton Tote",
    "Elegant Red Leather Tote",
    "Handmade Embroided White Tote with Red Roses",
    "Multicolored White Tote",
    "Owl White Cotton Tote",
    "Simple Grey Zipped Tote",
    "Earth Positive Tote Bag",
    "Deep Purple Handstamped Tote",
    "White Cotton Tote with Drawings",
    "Grey Wolf Tote",
    "Yellow and Green Bold Tote",
  ];
  const totes_imgs = [
    "/images/totes_imgs/bag-cotton-cotton-bag-textile-wall-white-TO-1.jpg",
    "/images/totes_imgs/handbag-fashion-fashionable-woman-TO-2.jpg",
    "/images/totes_imgs/shop-bag-bags-sale-TO-3.jpg",
    "/images/totes_imgs/bag-bag-elephant-cloth-bag-TO-4.jpg",
    "/images/totes_imgs/bag-bag-elephant-cloth-bag-TO-4.jpg",//not found
    "/images/totes_imgs/4714518639_8d9e06be13_b-TO-6.jpg",
    "/images/totes_imgs/3674472019_727d8c4669-TO-7.jpg",
    "/images/totes_imgs/5342130557_7fa8cc5935_b-TO-8.jpg",
    "/images/totes_imgs/bag-cotton-natural-cotton-bag-advertising-royalty-free-thumbnail-TO-9.jpg",
    "/images/totes_imgs/bag-handbag-womans-bag-sport-bag-TO-10.jpg",
    "/images/totes_imgs/bag-burlap-advertising-TO-11.jpg",
  ];

  async function seedProducts(titlesArr, imgsArr, categStr) {
    if (titlesArr.length != imgsArr.length) {
      console.log(titlesArr);
      throw Error("ihdbsds")
    }
    
    try {
      const categ = await Category.findOne({ title: categStr });
      for (let i = 0; i < titlesArr.length; i++) {
        let prod = new Product({
          productCode: faker.helpers.replaceSymbolWithNumber("####-##########"),
          title: titlesArr[i],
          imagePath: imgsArr[i],
          description: faker.lorem.paragraph(),
          price: faker.random.number({ min: 10, max: 50 }),
          manufacturer: faker.company.companyName(0),
          available: true,
          category: categ._id,
        });
        await prod.save();
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  await seedProducts(backpacks_titles, backpacks_imgs, "Backpacks");
  await seedProducts(briefcases_titles, briefcases_imgs, "Briefcases");
  await seedProducts(travel_titles, travel_imgs, "Travel");
  await seedProducts(miniBags_titles, miniBags_imgs, "Mini Bags");
  await seedProducts(
    largeHandbags_titles,
    largeHandbags_imgs,
    "Large Handbags"
  );
  await seedProducts(purses_titles, purses_imgs, "Purses");
  await seedProducts(totes_titles, totes_imgs, "Totes");
}

