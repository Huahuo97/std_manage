<template>
  <div class="header">
    <div class="logo">
      <img src="../../../assets/logo.png" class="logo-img">
      <span class="logo-alt">欢迎注册</span>
    </div>
    <div class="sign-in">
      <span class="sign-alt">已有账号？ <router-link :to="{ name: 'Login' }" class="link">请登录</router-link></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterHeader'
}
</script>

<style lang="less" scoped>
  @import '~common/style/variable.less';
  .header {
    display: flex;
    width: 100%;
    padding: 50px 70px 10px;
    border-bottom: 2px solid gray;
    .logo {
      flex: 1;
      .logo-img {
        width: 80px;
        height: 80px;
      }
      .logo-alt {
        margin-left: 20px;
        font-weight: 500;
        font-size: 2rem;
      }
    }
    .sign-in {
      padding-top: 30px;
      .sign-alt {
        font-weight: 500;
        .link {
          color: @link-style-color
        }
      }
    }
  }
</style>
