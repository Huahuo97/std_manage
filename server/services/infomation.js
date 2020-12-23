const express = require('express')
const router = express.Router()
const Students = require('./mongo').students

router.get('/info', async (req, res) => {
  const index = req.query.index
  const student = await Students.findOne({ student_id: index }) || await Students.findOne({ contact_number: index })
  res.json(student)
})

router.get('/modify', async (req, res) => {
  const form = JSON.parse(req.query.form)
  const id = form['student_id']
  const birthDate = form['birth_date']
  const isMarry = form['is_marry']
  const nation = form['nation']
  const politics = form['politics']
  const nativePlace = form['native_place']
  const originStudent = form['origin_student']
  const contactNumber = form['contact_number']
  const contactEmail = form['contact_email']
  const homeAdd = form['home_add']
  const postalCode = form['postal_code']
  try {
    await Students.updateOne(
      { student_id: id },
      {
        birth_date: birthDate,
        is_marry: isMarry,
        nation: nation,
        politics: politics,
        native_place: nativePlace,
        origin_student: originStudent,
        contact_number: contactNumber,
        contact_email: contactEmail,
        home_add: homeAdd,
        postal_code: postalCode
      }
    )
    res.send(true)
  } catch(err) {
    res.send(false)
  }
})

module.exports = router
