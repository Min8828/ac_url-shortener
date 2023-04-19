const router = require("express").Router()
const nanoid = require("nanoid")
const ShortenUrl = require("../../models/shorUrl-modal")

router.get("/", async (req, res) => {
  try {
    const urls = await ShortenUrl.find({}).lean().exec()
    res.render("index", {
      urls,
    })
  } catch {
    (err) => console.log(err)
  }
})

module.exports = router
