const express = require('express'); 
const router = express.Router(); 


const signUp = require("../controllers/signUp")
const login = require("../controllers/login");
const auth = require("../controllers/auth");
const user = require("../controllers/user");


router.post("/signUp", signUp)
router.post("/login", login);
router.post("/auth", auth);
router.post("/user", user);

module.exports = router;  
