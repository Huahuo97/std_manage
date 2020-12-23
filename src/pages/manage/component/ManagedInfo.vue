<template>
  <div class="managed-info">
    <base-header>学生信息</base-header>
    <div class="table">
      <el-table
        border
        v-loading="loading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="student_id"
          label="学号"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="gender"
          label="性别">
        </el-table-column>
        <el-table-column
          prop="college"
          label="学院">
        </el-table-column>
        <el-table-column
          prop="major"
          label="专业">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import BaseHeader from 'components/BaseHeader'
import { getAllStudent } from 'api/student'
export default {
  name: 'ManagedInfo',
  components: {
    BaseHeader
  },
  data () {
    return {
      tableData: [],
      loading: true
    }
  },
  methods: {
    getAllStudent () {
      getAllStudent().then(res => {
        this.tableData = res
        this.loading = false
      })
    }
  },
  mounted () {
    this.getAllStudent()
  }
}
</script>

<style lang="less" scoped>
  .managed-info {
    width: 100%;
    .table {
      padding: 0 70px;
      margin-bottom: 35px;
    }
  }
</style>
