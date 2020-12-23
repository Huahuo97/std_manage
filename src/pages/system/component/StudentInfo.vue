<template>
  <div class="student-info">
    <base-header>学生信息</base-header>
    <div class="info">
      <table class="info_default table_margin">
        <tbody>
          <tr><th colspan="5"><span>基本信息</span></th></tr>
          <tr>
            <td><span>姓名</span></td>
            <td><span>{{this.stdInfo.name}}</span></td>
            <td><span>性别</span></td>
            <td><span>{{this.stdInfo.gender}}</span></td>
            <td rowspan="6"><div class="user-img"><img src="~assets/logo.png"></div></td>
          </tr>
          <tr>
            <td><span>学号</span></td>
            <td><span>{{this.stdInfo.student_id}}</span></td>
            <td><span>入学年份</span></td>
            <td><span>{{this.formatDate(this.stdInfo.enter_year, 'enter')}}</span></td>
          </tr>
          <tr>
            <td><span>出生日期</span></td>
            <td><span>{{this.formatDate(this.stdInfo.birth_date, 'birth')}}</span></td>
            <td><span>婚姻状况</span></td>
            <td><span>{{this.stdInfo.is_marry}}</span></td>
          </tr>
          <tr>
            <td><span>民族</span></td>
            <td><span>{{this.stdInfo.nation}}</span></td>
            <td><span>政治面貌</span></td>
            <td><span>{{this.stdInfo.politics}}</span></td>
          </tr>
          <tr>
            <td><span>学院</span></td>
            <td><span>{{this.stdInfo.college}}</span></td>
            <td><span>专业</span></td>
            <td><span>{{this.stdInfo.major}}</span></td>
          </tr>
          <tr>
            <td><span>籍贯</span></td>
            <td><span>{{this.stdInfo.native_place}}</span></td>
            <td><span>生源地</span></td>
            <td><span>{{this.stdInfo.origin_student}}</span></td>
          </tr>
        </tbody>
      </table>
      <table class="info_default info_contact table_margin">
        <tbody>
          <tr><th colspan="4"><span>联系方式</span></th></tr>
          <tr>
            <td><span>联系电话</span></td>
            <td><span>{{this.stdInfo.contact_number}}</span></td>
            <td><span>邮箱</span></td>
            <td><span>{{this.stdInfo.contact_email}}</span></td>
          </tr>
          <tr>
            <td><span>家庭住址</span></td>
            <td><span>{{this.stdInfo.home_add}}</span></td>
            <td><span>邮政编码</span></td>
            <td><span>{{this.stdInfo.postal_code}}</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import BaseHeader from 'components/BaseHeader'
import { getStudentInfos } from 'api/student'
import { mapMutations } from 'vuex'
export default {
  name: 'StudentInfo',
  components: {
    BaseHeader
  },
  computed: {
    index () {
      return this.$route.params.index
    }
  },
  data () {
    return {
      stdInfo: {}
    }
  },
  methods: {
    formatDate (date, type) {
      const temp = date
      if (temp === undefined) {
        return ''
      } else {
        if (type === 'enter') {
          const fDate = new Date(temp)
          const year = fDate.getFullYear()
          return `${year}年`
        } else if (type === 'birth') {
          const fDate = new Date(temp)
          const year = fDate.getFullYear()
          const month = fDate.getMonth() + 1
          const date = fDate.getDate()
          return `${year}年${month}月${date}日`
        }
      }
    },
    getStudentInfos () {
      getStudentInfos(this.index).then(res => {
        this.stdInfo = res
      })
    },
    ...mapMutations({ setLoginUserName: 'setLoginUserName' })
  },
  mounted () {
    this.getStudentInfos()
  },
  updated () {
    this.setLoginUserName(this.stdInfo.name)
  }
}
</script>

<style lang="less" scoped>
  .student-info {
    width: 100%;
    .info {
      width: 100%;
      padding: 0 15px;
      .table_margin {
        margin: 10px auto;
      }
      .info_default {
        width: 100%;
        border: 1px solid #ddd;
        background: #fff;
        color: #333;
        border-collapse: collapse;
        th {
          font-size: 16px;
          font-weight: bold;
          color: #313131;
          height: 32px;
          line-height: 32px;
          border-bottom: 1px solid #ddd;
        }
        tr {
          width: 100%;
          td {
            padding: 5px;
            height: 35px;
            border: 1px solid #ddd;
            border-top: none;
            .user-img {
              height: 165px;
              width: 120px;
              margin: 0 auto;
              border: 3px solid #f4f4f4;
              background-color: #f4f4f4;
              img {
                width: 100px;
                height: 100%;
              }
            }
          }
          td:first-child,
          td:nth-child(3) {
            width: 10%;
            text-align: right;
          }
          td:nth-child(2),
          td:nth-child(4) {
            width: 30%;
            text-align: center;
          }
          td:nth-child(5) {
            width: 20%;
          }
        }
      }
      .info_contact {
        tr {
          width: 100%;
          td:nth-child(odd) {
            width: 10%;
            text-align: right;
            border: 1px solid #ddd;
            border-top: none;
          }
          td:nth-child(even) {
            width: 23%;
            text-align: center;
            border: 1px solid #ddd;
            border-top: none;
          }
        }
      }
    }
  }
</style>
