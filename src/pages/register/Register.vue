<template>
  <div class="contain">
    <div class="register">
      <register-header></register-header>
      <div class="main">
        <el-form ref="ruleForm" :model="form" status-icon :rules="rules" label-width="80px" label-position="right" class="form">
          <el-form-item label="学号" prop="id">
            <el-input
              v-model="form.id">
            </el-input>
          </el-form-item>
          <el-form-item label="手机号码" prop="tel">
            <el-input
              v-model="form.tel">
            </el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              type="password"
              autocomplete="off"
              v-model="form.password">
            </el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="repassword">
            <el-input
              type="password"
              autocomplete="off"
              v-model="form.repassword">
            </el-input>
          </el-form-item>
          <el-form-item label="">
            <el-button type="primary">注册</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import RegisterHeader from './component/Header'
export default {
  name: 'Register',
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.form.repassword !== '') {
          this.$refs.ruleForm.validateField('repassword')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.form.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      form: {
        id: '',
        tel: '',
        password: '',
        repassword: ''
      },
      rules: {
        id: [
          { required: true, message: '请输入学号', trigger: 'blur' }
        ],
        tel: [
          { required: true, message: '请输入联系电话', trigger: 'blur' }
        ],
        password: [
          { required: true, validator: validatePass, trigger: 'blur' }
        ],
        repassword: [
          { required: true, validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  components: {
    RegisterHeader
  },
  methods: {
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
  .contain {
    width: 100%;
    .main {
      width: 480px;
      margin: 0 auto;
      padding-top: 40px
    }
  }
</style>
