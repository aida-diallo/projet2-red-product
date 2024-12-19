const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
require("dotenv").config();
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const hotelRoutes = require("./routes/hotelRoutes"); 

const APP = express();
APP.use(cors());

APP.use(express.json());
APP.use(session({
    secret: 'votre_secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected..."))
  .catch((error) => console.error("MongoDB connection error:", error));


APP.use("/api", authRoutes);
APP.use("/api", hotelRoutes); 

APP.use((req, res) => {
  res.status(404).send('<h1>404! Page not found</h1>');
});

const PORT = process.env.PORT || 5000;
APP.listen(PORT, () => {
  console.log(`Server listening at port: ${PORT}`);
});
