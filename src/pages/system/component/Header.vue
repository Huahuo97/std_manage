<template>
  <div class="header">
    <div class="logo">
      <img src="../../../assets/logo.png">
      <span class="alt">学生信息管理系统</span>
    </div>
    <div class="user">
      <i class="el-icon-user"></i>
      <span class="user-info">花火</span>
      <router-link :to="{ name: 'Login' }" class="sign-out">退出登录</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader'
}
</script>

<style lang="less" scoped>
  @import '~common/style/variable.less';
  .header {
    display: flex;
    width: 100%;
    padding: 30px 70px 10px;
    border-bottom: 2px solid gray;
    .logo {
      flex: 1;
      img {
        width: 80px;
        height: 80px;
      }
      .alt {
        margin-left: 20px;
        font-weight: 500;
        font-size: 2rem;
      }
    }
    .user {
      padding-top: 30px;
      font-weight: 500;
    }
  }
</style>
