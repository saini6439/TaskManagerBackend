// Module Import
let express = require("express");
// Express Router
let router = express.Router();

let allusers = require("../controllers/useraccount");
// Middleware
let auth = require("../middlewares/auth");

let UserAccountController = require("../controllers/useraccount");

router.get("/", (req, res, next) => res.status(200).json({ success: true }));
// POST methods
router.post("/register", UserAccountController.createUser);
router.post("/login", UserAccountController.loginAccount);

// Get methods
router.get("/getusers", auth.apiKeyAuth, UserAccountController.fetchusers);
router.get("/getallusers", auth.apiKeyAuth, allusers.fetchusers);

// Delete

router.delete('/userdelete/:id', auth.apiKeyAuth, UserAccountController.deleteById);
module.exports = router;