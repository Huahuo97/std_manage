<template>
  <div class="nav">
    <el-menu
      default-active="1-1"
      :unique-opened="false"
      router
      class="el-menu-vertical-demo">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>基本信息</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1" :route="{ name: 'StudentInfo' }">学生信息</el-menu-item>
          <el-menu-item index="1-2" :route="{ name: 'ModifyInfo' }">信息设置</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2" ref="submenu">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>教务信息</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1" :route="{ name: 'Grade' }">成绩查询</el-menu-item>
          <el-menu-item index="2-2" :route="{ name: 'Schedule' }">课表查询</el-menu-item>
          <el-menu-item index="2-3" :route="{ name: 'CourseSelect' }">课程选修</el-menu-item>
          <el-menu-item index="2-4" :route="{ name: 'ClassApply' }">考试报名</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="3" :route="{ name: 'Setting' }">
        <i class="el-icon-setting"></i>
        <span slot="title">账号设置</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'DetailNav',
  methods: {
    defaultOpen () {
      this.$refs.submenu.handleClick()
    }
  },
  mounted () {
    this.defaultOpen()
  }
}
</script>

<style lang="less" scoped>
  .nav {
    width: 100%;
  }
</style>
