const mongoose = require('mongoose')

async function connent() {
  try {
    await mongoose.connect('mongodb://localhost:27017/manage',
    {useNewUrlParser: true,
    useUnifiedTopology: true})
    console.log("连接数据库成功")
  } catch (e) {
    console.log("连接数据库失败")
  }
}

connent()

// 学生信息集合
const StudentsSchema = new mongoose.Schema({
  student_id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  gender: {
    type: String
  },
  enter_year: {
    type: Date
  },
  birth_date: {
    type: Date
  },
  is_marry: {
    type: String,
    default: '未婚'
  },
  nation: {
    type: String,
    default: '汉族'
  },
  politics: {
    type: String,
    default: '共青团员'
  },
  college: {
    type: String
  },
  major: {
    type: String
  },
  native_place: {
    type: String
  },
  origin_student: {
    type: String
  },
  contact_number: {
    type: String
  },
  contact_email: {
    type: String
  },
  postal_code: {
    type: String
  },
  home_add: {
    type: String
  }
})
// 用户登录信息集合
const UsersSchema = new mongoose.Schema({
  student_id: {
    type: String,
    required: true,
    unique: true
  },
  passwords: {
    type: String,
    required: true
  },
  contact_number: {
    type: String,
    required: true
  }
})
const StudentModel = mongoose.model('Students', StudentsSchema)
const UserModel = mongoose.model('Users', UsersSchema)

module.exports.students = StudentModel
module.exports.users = UserModel
