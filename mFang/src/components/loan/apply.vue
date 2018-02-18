<template>
  <div>
    <mt-header title="申请贷款">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <div class="apply-header">
      <p class="title">完善资料</p>
      <p class="tips">填写资料流程完成申请</p>
    </div>

    <div class="apply-content">
      <ul>
        <li>
          <mt-cell
            @click.native="identityVisible = true"
            title="职业身份"
            is-link
            value="上班族">
          </mt-cell>
          <mt-actionsheet :actions="identity" v-model="identityVisible" cancel-text="取消"></mt-actionsheet>
        </li>
        <li>
          <mt-cell
            title="房产类型"
            is-link
            value="经济房">
          </mt-cell>
        </li>
      </ul>
      <div class="rules-check">
        <input type="checkbox" name="条款" id="rules-checkbox">
        <label for="rules-checkbox">我已同意</label>
        <span>《服务条款》</span>
      </div>
    </div>

    <div class="apply-next">
      <mt-button class="btn" size="large">下一步</mt-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'applyLoan',
  data () {
    return {
      identity: [],
      identityVisible: false
    };
  },

  methods: {
    setIdentity (opt) {
      let _name = opt.name;
      console.log(_name);
    }
  },

  mounted () {
    this.identity = [{
      name: '学生',
      method: this.setIdentity
    }, {
      name: '上班族',
      method: this.setIdentity
    }];
  }
};
</script>

<style lang="scss" scoped>
.apply-header{
  background: #6e53fa;
  color: white;
  text-align: center;
  padding: 20px 0 40px 0;
  .title{
    font-size: 36px;
  }
  .tips{
    font-size: 14px;
  }
}

.apply-content{
  padding-bottom: 45px;

  .rules-check{
    color: #999999;
    font-size: 12px;
    padding-top: 20px;
    padding-left: 20px;
  }
}

.apply-next{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  .btn{
    background: #fe5e48;
    color: white;
    border-radius: 0;
  }
}
</style>
