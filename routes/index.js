const router = require("express").Router()
const home = require('./modules/home')
const urls = require('./modules/urls')

router.use("/", home)
router.use("/", urls)

module.exports = router