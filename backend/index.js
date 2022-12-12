const express = require("express");
const env = require("./config/envConfig");
const cors = require("cors");
const connect = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");
const app = express();

// database connection
connect();

app.use(cors());
// middleware
app.use(express.json({limit: '50mb'}));

app.get("/", (req, res) => {
    res.json({msg: 'Welcome to Fashion Fiesta!!'});
});

// user routes
app.use('/api',userRoutes);
// category routes
app.use('/api', categoryRoutes);
// product routes
app.use('/api', productRoutes);

const port = env.PORT || 5000;

app.listen(port, () => {
    console.log(`Your server is running at port number: ${port}`);
});