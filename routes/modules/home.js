const router = require('express').Router()
const { nanoid } = require('nanoid')
const ShortenUrl = require('../../models/shortUrl-modal')

router.get('/', async (req, res) => {
  res.render('index')
})

router.post('/', async (req, res) => {
  const { fullUrl } = req.body

  // prevent the empty input from continuing the following steps
  if (!fullUrl) return res.redirect('/')

  try {
    const foundUrl = await ShortenUrl.findOne({ fullUrl }).lean().exec()
    const shortUrl = nanoid(5)
    const url = foundUrl || (await ShortenUrl.create({ fullUrl, shortUrl }))
    res.render('index', { url })
  } catch {
    (err) => console.log(err)
  }
})

module.exports = router
