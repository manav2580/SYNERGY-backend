const {getMarketData,getTransactions, detectAnomaly, filterTransactions, showTransitiveTransactions, detectFrequentReceiver} =require('../controllers/cexController')
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const express = require("express");
const router = express.Router();

router.route("/getBinance").get(getMarketData);
router.route("/getTransactions").post(getTransactions);
router.route("/detectAnomaly").get(detectAnomaly);
// detectFrequentReceiver
router.route("/filterTransactions").get(filterTransactions);
router.route("/showTransitiveTransactions").get(showTransitiveTransactions);
router.route("/detectFrequentReceiver").get(detectFrequentReceiver);
module.exports = router;