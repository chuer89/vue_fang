<template>
  <footer class="footer">
    <div class="space"></div>
    <div class="bottom">
      <mt-tabbar v-model="selected">
        <mt-tab-item id="home">
          <img slot="icon" src="../../assets/100x100.png">
          首页
        </mt-tab-item>
        <mt-tab-item id="loan">
          <img slot="icon" src="../../assets/100x100.png">
          贷款申请
        </mt-tab-item>
        <mt-tab-item id="query">
          <img slot="icon" src="../../assets/100x100.png">
          进度查询
        </mt-tab-item>
        <mt-tab-item id="person">
          <img slot="icon" src="../../assets/100x100.png">
          个人中心
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </footer>
</template>
<script>

import Vue from 'vue';

import { Tabbar, TabItem } from 'mint-ui';

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

export default {
  name: 'tabbar',
  data () {
    return {
      selected: 'home'
    };
  }
};
</script>

<style lang="scss" scoped>
  .footer{
    .space{
      height: 55px;
    }
    .bottom{
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
</style>
