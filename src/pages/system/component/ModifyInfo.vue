<template>
  <div class="modify-info">
    <base-header>更改信息</base-header>
    <div class="center">
      <el-form ref="ruleForm" :model="form" label-width="70px">
        <el-form-item label="学号" prop="student_id">
          <el-input v-model="form.student_id" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form.name" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="民族" prop="nation">
          <el-input v-model="form.nation"></el-input>
        </el-form-item>
        <el-form-item label="政治面貌" prop="politics">
          <el-input v-model="form.politics"></el-input>
        </el-form-item>
        <el-form-item label="学院" prop="college">
          <el-input v-model="form.college" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="专业" prop="major">
          <el-input v-model="form.major" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" prop="contact_number">
          <el-input v-model="form.contact_number"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="contact_email">
          <el-input v-model="form.contact_email"></el-input>
        </el-form-item>
        <el-form-item label="婚姻状况" prop="is_marry">
          <el-input v-model="form.is_marry"></el-input>
        </el-form-item>
        <el-form-item label="出生日期" prop="birth_date">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.birth_date" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="籍贯" prop="native_place">
          <el-input v-model="form.native_place"></el-input>
        </el-form-item>
        <el-form-item label="生源地" prop="origin_student">
          <el-input v-model="form.origin_student"></el-input>
        </el-form-item>
        <el-form-item label="家庭住址" prop="home_add">
          <el-input v-model="form.home_add"></el-input>
        </el-form-item>
        <el-form-item label="邮政编码" prop="postal_code">
          <el-input v-model="form.postal_code"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="modifyInfo">提交</el-button>
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
import { getStudentInfos, modifyInfo } from 'api/student'
export default {
  name: 'ModifyInfo',
  components: {
    BaseHeader
  },
  data () {
    return {
      form: {
        student_id: '',
        name: '',
        nation: '',
        politics: '',
        college: '',
        major: '',
        contact_number: '',
        contact_email: '',
        is_marry: '',
        birth_date: '',
        native_place: '',
        origin_student: '',
        home_add: '',
        postal_code: ''
      },
      message: '',
      centerDialogVisible: false
    }
  },
  computed: {
    index () {
      return this.$route.params.index
    }
  },
  methods: {
    closeDialog () {
      this.centerDialogVisible = false
    },
    getStudentInfos () {
      getStudentInfos(this.index).then(res => {
        this.form = res
      })
    },
    modifyInfo () {
      modifyInfo(this.form).then(res => {
        if (res === true) {
          this.message = '修改成功'
          this.centerDialogVisible = true
        } else {
          this.message = '修改失败'
          this.centerDialogVisible = true
        }
      })
    }
  },
  mounted () {
    this.getStudentInfos()
  }
}
</script>

<style lang="less" scopde>
  .modify-info {
    width: 100%;
    .center {
      width: 50%;
      margin: 0 auto;
      padding: 0 70px;
    }
  }
</style>
