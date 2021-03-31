const PORT = 3000
const Product = require('./models/product')

const express = require('express')
const app = express()

const path = require('path');
const ejsMate = require('ejs-mate');
app.use(express.static(path.join(__dirname, 'public')));


app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const mongoose = require('mongoose');
// Connect to MongoDB
const DB_URI = "mongodb+srv://tyler25419:Master25419!@cluster0.yd5bk.mongodb.net/Tourmy?retryWrites=true&w=majority";
mongoose.connect(DB_URI, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error:"));
db.once("open", () => {
  console.log("Database Connected");
});




// sandbox routes
// app.get('/addproduct', async (req, res) => {
//   const product = new Product({
//     name: "Lost Hydra",
//     description: "Lost Hydra description",
//     price: 500.00,
//     category: "surfboards"
//   });

//   await product.save();
//   res.send(product);
// })

// app.get('/allproducts', async (req, res) => {
//   const allProducts = await Product.find()
//   res.send(allProducts)
// })
//

//=====//

app.get('/', async (req, res) => {
  // Fix so that it does not have to be hardcoded.
  const featuredSurfboards=[];

  let item = await Product.find({name: "Firewire Seaside"});
  featuredSurfboards.push(item[0])

  item = await Product.find({name: "Haydenshapes Hypto Krypto"});
  featuredSurfboards.push(item[0])

  item = await Product.find({name: "Superbrand Fling"});
  featuredSurfboards.push(item[0])

  item = await Product.find({name: "Lost Hydra"});
  featuredSurfboards.push(item[0])

  res.render('home', {featuredSurfboards});
})

app.get('/surfboards', async function (req, res) {
  const allSurfboards = await Product.find({category:"surfboards"})
  res.render('tourmy/surfboards', {allSurfboards});
});

app.get('/fins', async function (req, res) {
  const allFins = await Product.find({category:"fins"})
  res.render('tourmy/fins', {allFins});
});

app.get('/accessories', async function (req, res) {
  const allAccessories = await Product.find({category:"accessories"})
  res.render('tourmy/accessories', {allAccessories});
});

//=====//

app.get('/surfboards/:id', async (req, res) => {
  const specificProduct = await Product.findById(req.params.id);
  res.render('tourmy/show', {specificProduct});
});


//=====//

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`)
});