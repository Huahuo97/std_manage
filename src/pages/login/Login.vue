<template>
  <div class="contain">
    <div class="background">
      <img src="../../assets/bg.jpg" alt="">
    </div>
    <div class="login">
      <div class="login-form">
        <div class="logo">
          <img src="../../assets/logo.png">
        </div>
        <el-form ref="form" :model="form" label-width="55px" label-position="right" class="form">
          <el-form-item label="账号">
            <el-input
              placeholder="学号/手机号码"
              clearable
              v-model="form.number">
            </el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input
              show-password
              v-model="form.password">
            </el-input>
          </el-form-item>
        </el-form>
        <el-form ref="sub" :model="form" label-width="100px">
          <el-form-item label="">
            <el-button type="primary" class="btn-style" @click="checkLogin">登录</el-button>
            <el-button type="info" class="btn-style" @click="linkToRegister">注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <el-dialog
      title="提示"
      :visible.sync="centerDialogVisible"
      width="30%"
      center>
      <span>{{this.message}}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { checkLogin } from 'api/user'
export default {
  name: 'Login',
  data () {
    return {
      form: {
        number: '',
        password: ''
      },
      centerDialogVisible: false,
      message: ''
    }
  },
  methods: {
    linkToRegister () {
      this.$router.push({ name: 'Register' })
    },
    checkLogin () {
      checkLogin({
        id: this.form.number,
        phone: this.form.number,
        password: this.form.password
      }).then(res => {
        if (res === true) {
          this.$router.push({ path: `/system/${this.form.number}/info` })
        } else if (res === false) {
          this.centerDialogVisible = true
          this.message = '密码错误'
        } else {
          this.centerDialogVisible = true
          this.message = res
        }
      })
    },
    closeDialog () {
      this.centerDialogVisible = false
    }
  }
}
</script>

<style lang="less" scoped>
  .contain {
    width: 100%;
    height: 625px;
    .background {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .login {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 99 ;
    transform: translate(-50%, -50%);
    width: 360px;
    height: 200px;
    padding-top: 20px;
    padding-right: 20px;
    margin: 0 20px;
    border: 2px solid #5c5c5c;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    background: #fff;
    .login-form {
      width: 100%;
      height: 100%;
      position: relative;
      .logo {
        position: absolute;
        left: 50%;
        top: -80px;
        z-index: 999;
        width: 80px;
        height: 80px;
        transform: translateX(-50%);
        border-radius: 50% 50%;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  }
</style>
