const express = require('express')
const router = express.Router()
const Users = require('./mongo').users
const Students = require('./mongo').students

router.get('/register', async (req, res) => {
  const student_id = req.query.id
  const contact_number = req.query.phone
  const passwords = req.query.password
  const isManaged = await Students.findOne({ student_id: student_id })
  if (isManaged) {
    try {
      await Users.create({
        student_id,
        passwords,
        contact_number
      })
      res.send(true)
    } catch(err) {
      res.send(false)
    }
  } else {
    res.send('学号不存在')
  }
  
})

module.exports = router
