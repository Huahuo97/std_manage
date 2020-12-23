const express = require('express')
const router = express.Router()
const Students = require('./mongo').students

router.get('/registe/baseinfo', async (req, res) => {
  const query = req.query
  try {
    await Students.create({
      student_id: query.student_id,
      name: query.name,
      major: query.major,
      contact_number: query.contact_number,
      college: query.college,
      gender: query.gender,
      birth_date: query.birth_date,
      enter_year: query.enter_year
    })
    res.send(true)
  } catch(err) {
    res.send(false)
  }
})

router.get('/students', async (req, res) => {
  try {
    const studentArr = await Students.find()
    res.send(studentArr)
  } catch(err) {
    res.send(false)
  }
})

module.exports = router
