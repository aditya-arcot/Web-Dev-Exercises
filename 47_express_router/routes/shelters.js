const express = require('express')
const router = express.Router()

router.get('', (req, res) => {
    res.send('all shelters')
})
router.post('', (req, res) => {
    res.send('creating shelter')
})
router.get('/:id', (req, res) => {
    res.send('viewing 1 shelter')
})
router.get('/:id/edit', (req, res) => {
    res.send('editing 1 shelter')
})

module.exports = router