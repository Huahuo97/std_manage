<template>
  <div class="contain">
    <detail-header :name="getLoginUserName"></detail-header>
    <div class="center">
      <div class="left">
        <detail-nav></detail-nav>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import DetailHeader from './component/Header'
import DetailNav from './component/Nav'
import { mapGetters } from 'vuex'
export default {
  name: 'System',
  components: {
    DetailHeader,
    DetailNav
  },
  computed: {
    ...mapGetters(['getLoginUserName'])
  }
}
</script>

<style lang="less" scoped>
  @import '~common/style/variable.less';
  .contain {
    width: 100%;
    .center {
      width: 100%;
      .left {
        float: left;
        width: 20%;
      }
      .right {
        float: right;
        width: 80%;
        height: 503px;
        overflow: auto;
        background-color: @background-color;
      }
    }
  }
</style>
