<template>
  <div class="add-managed">
    <base-header>添加学员</base-header>
    <div class="center">
      <el-form ref="ruleForm" :model="form" label-width="70px">
        <el-form-item label="学号" prop="id">
          <el-input v-model="form.id"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="学院" prop="college">
          <el-input v-model="form.college"></el-input>
        </el-form-item>
        <el-form-item label="专业" prop="major">
          <el-input v-model="form.major"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="gender">
          <el-select v-model="form.gender" placeholder="请选择性别">
            <el-option label="男" value="男"></el-option>
            <el-option label="女" value="女"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="联系电话" prop="contactNumber">
          <el-input v-model="form.contactNumber"></el-input>
        </el-form-item>
        <el-form-item label="入学时间" prop="enterYear">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.enterYear" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="addStudent">添加</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
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
  </div>
</template>

<script>
import BaseHeader from 'components/BaseHeader'
import { addStudent } from 'api/student.js'
export default {
  name: 'AddManaged',
  components: {
    BaseHeader
  },
  data () {
    return {
      form: {
        id: '',
        name: '',
        college: '',
        major: '',
        gender: '',
        contactNumber: '',
        enterYear: ''
      },
      message: '',
      centerDialogVisible: false,
      success: false
    }
  },
  methods: {
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    closeDialog () {
      this.centerDialogVisible = false
      if (this.success === true) {
        this.resetForm('ruleForm')
      }
    },
    addStudent () {
      addStudent(this.form).then(res => {
        this.success = res
        this.centerDialogVisible = true
        if (res === true) {
          this.message = '注册成功'
        } else {
          this.message = '注册失败'
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .add-managed {
    width: 100%;
    .center {
      width: 50%;
      margin: 0 auto;
      padding: 0 70px;
    }
  }
</style>
