<template>
  <div class="nav">
    <el-menu
      default-active="1-1"
      :unique-opened="false"
      router
      class="el-menu-vertical-demo">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>学生信息管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1" :route="{ name: 'ManagedInfo' }" ref="submenu">学生信息</el-menu-item>
          <el-menu-item index="1-2" :route="{ name: 'AddManaged' }">学员添加</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2" :route="{ name: 'ManageSetting' }">
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
