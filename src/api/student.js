import { URL } from './config'
import axios from 'axios'

export const addStudent = function (obj) {
  const url = `${URL}/manage/registe/baseinfo`
  return axios.get(url, {
    params: {
      student_id: obj.id,
      name: obj.name,
      major: obj.major,
      contact_number: obj.contactNumber,
      college: obj.college,
      gender: obj.gender,
      enter_year: obj.enterYear
    }
  }).then(res => {
    if (res && res.data) {
      return Promise.resolve(res.data)
    }
  })
}

export const getAllStudent = function () {
  const url = `${URL}/manage/students`
  return axios.get(url).then(res => {
    if (res && res.data) {
      return Promise.resolve(res.data)
    }
  })
}

export const getStudentInfos = function (index) {
  const url = `${URL}/student/info`
  return axios.get(url, {
    params: {
      index
    }
  }).then(res => {
    if (res && res.data) {
      return Promise.resolve(res.data)
    }
  })
}

export const modifyInfo = function (form) {
  const url = `${URL}/student/modify`
  return axios.get(url, {
    params: {
      form
    }
  }).then(res => {
    if (res && res.data) {
      return Promise.resolve(res.data)
    }
  })
}
