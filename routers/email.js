const emailController = require("../controllers/emailController");

const router = require("express").Router();

router.post("/sendeMail", emailController.sendMail);

module.exports = router;
