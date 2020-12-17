<template>
  <div class="base-header">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BaseHeader'
}
</script>

<style lang="less" scoped>
  @import '~common/style/variable.less';
  .base-header {
    width: 100%;
    height: 40px;
    color: @theme-style-color;
    line-height: 40px;
    padding-left: 25px;
  }
</style>
