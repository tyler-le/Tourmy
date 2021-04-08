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
mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error:"));
db.once("open", () => {
  console.log("Database Connected");
});

app.get('/favicon.ico', (req, res) => res.status(204));



app.get('/', async (req, res) => {
  const featuredSurfboards = await Product.find({
    tags: 'featured'
  });

  res.render('home', {
    featuredSurfboards
  });
})

app.get('/:category', async (req, res) => {
  // Refactor better
  const category = req.params.category
  const allSurfboards = await Product.find({
    category
  })
  const allFins = await Product.find({
    category
  })
  const allAccessories = await Product.find({
    category
  })
  res.render(`tourmy/${category}`, {
    allSurfboards,
    allFins,
    allAccessories
  });
});


app.get('/:category/:id', async (req, res, featuredSurfboards) => {
  const category = req.params.category
  featuredSurfboards = await Product.find({
    tags: 'featured'
  });

  const specificProduct = await Product.findById(req.params.id);
  res.render('tourmy/show', {
    specificProduct,
    featuredSurfboards,
    category
  });
});

app.get('/cart', async (req, res) => {
  res.render('tourmy/cart');
});


app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`)
});