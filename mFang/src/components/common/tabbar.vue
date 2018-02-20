<template>
  <footer class="footer">
    <div class="space"></div>
    <div>
      <mt-tabbar v-model="selected" fixed>
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
export default {
  name: 'tabbar',
  data () {
    return {
      selected: this.$store.state.tabbarPathName
    };
  },

  watch: {
    selected (val) {
      this.$store.commit('changeTabbarPathName', val);

      let pathTo = (path) => {
        window.router.push({path: path});
      };

      switch (val) {
        case 'home':
          pathTo('/');
          break;
        case 'loan':
          break;
        case 'query':
          break;
        case 'person':
          pathTo('person');
          break;
      }
      // console.log(val);
    }
  }
};
</script>

<style lang="scss" scoped>
  .footer{
    .space{
      height: 55px;
    }
  }
</style>
