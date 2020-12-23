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
    type: String,
    required: true
  },
  major: {
    type: String,
    required: true
  },
  native_place: {
    type: String,
    default: ''
  },
  origin_student: {
    type: String,
    default: ''
  },
  contact_number: {
    type: String,
    required: true
  },
  contact_email: {
    type: String,
    default: ''
  },
  postal_code: {
    type: String,
    default: ''
  },
  home_add: {
    type: String,
    default: ''
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
// 管理学生初始信息
// const ManageSchema = new mongoose.Schema({
//   student_id: {
//     type: String,
//     required: true
//   },
//   name: {
//     type: String,
//     required: true
//   },
//   major: {
//     type: String,
//     required: true
//   },
//   contact_number: {
//     type: String
//   },
//   college: {
//     type: String,
//     required: true
//   },
//   gender: {
//     type: String
//   },
//   birth_date: {
//     type: Date
//   },
//   enter_year: {
//     type: Date
//   }
// })
const StudentModel = mongoose.model('Students', StudentsSchema)
const UserModel = mongoose.model('Users', UsersSchema)
// const ManageModel = mongoose.model('Manages', ManageSchema)

module.exports.students = StudentModel
module.exports.users = UserModel
// module.exports.manageds = ManageModel
