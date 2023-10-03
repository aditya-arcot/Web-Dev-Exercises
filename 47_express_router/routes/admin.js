const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
    if (req.query.isAdmin){
        return next()
    }
    res.send('not an admin')
})

router.get('/secret', (req, res) => {
    res.send('secret')
})
router.get('/secret2', (req, res) => {
    res.send('secret2')
})

module.exports = router