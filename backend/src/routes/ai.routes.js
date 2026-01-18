const express = require('express');
const router = express.Router();
const {getReview} = require("../controllers/ai.controller")

router.post("/get-Review",getReview)


module.exports = router;