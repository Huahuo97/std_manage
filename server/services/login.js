const express = require('express')
const router = express.Router()
const Users = require('./mongo').users

router.get('/login/check', async (req, res) => {
  const id = req.query.id
  const phone = req.query.phone
  const password = req.query.password
  try {
    const user = await Users.findOne({ student_id: id }) || await Users.findOne({ contact_number: phone })
    if (user.passwords === password) {
      res.send(true)
    } else {
      res.send(false)
    }
  } catch(err) {
    res.send('该用户不存在')
  }
})

module.exports = router
