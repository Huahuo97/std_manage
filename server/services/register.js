const express = require('express')
const router = express.Router()
const Users = require('./mongo').users

router.get('/register', async (req, res) => {
  const id = req.query.id
  const phone = req.query.phone
  const password = req.query.password
  try {
    await Users.create({
      student_id: id,
      passwords: password,
      contact_number: phone
    })
    res.send(true)
  } catch(err) {
    res.send(err)
  }
})

module.exports = router
