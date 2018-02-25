<template>
  <div class="gray-bg">
    <div class="header">
      <div class="head-box">
        <div class="head-img">
          <img src="../../assets/person/head.jpg" alt="">
        </div>
      </div>
      <div class="info-box">
        <div class="phone">18525786485</div>
        <div><span class="id">小小素</span></div>
      </div>
      <div class="icon-to">&gt;</div>
    </div>
    <div>
      <mt-cell
        title="我的信用等级：E"
        is-link
        to="credit"
        value="去得提升，5000轻松">
      </mt-cell>
    </div>

    <div class="person-box">
      <div>
        <mt-cell title="贷款订单"></mt-cell>
      </div>
      <div class="order-box">
        <div class="item">
          待完成订单
        </div>
        <div class="item" @click="toRepayment">
          待还款订单
        </div>
        <div class="item">
          全部订单
        </div>
      </div>
    </div>

    <div class="person-box">
      <mt-cell title="认证管理" is-link>
        <img class="icon-pr" slot="icon" src="../../assets/person/auth.jpg" width="24">
      </mt-cell>
      <mt-cell title="账号安全" is-link>
        <img class="icon-pr" slot="icon" src="../../assets/person/safe.jpg" width="24">
      </mt-cell>
    </div>

    <div class="person-box">
      <mt-cell title="关于我们" is-link>
        <img class="icon-pr" slot="icon" src="../../assets/person/people.jpg" width="24">
      </mt-cell>
    </div>

    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'person',

  methods: {
    toRepayment () {
      window.router.push({
        path: 'repayment'
      });
    }
  }
};
</script>
<style lang="scss" scoped>

.header{
  display: flex;
  background: #7954fc;
  padding: 0 10px;
  .head-box{
    flex: 1;
    .head-img{
      background: white;
      width: 70%;
      text-align: center;
    }
    img{
      width: 50%;
    }
  }
  .info-box{
    flex: 3;
    color: white;
    .phone{
      font-size: 24px;
    }
    .id{
      font-size: 14px;
      border: 1px solid white;
      padding: 2px 5px;
    }
  }
  .icon-to{
    flex: 1;
    text-align: right;
    color: white;
    font-size: 28px;
  }
}

.person-box{
  background: white;
  margin-top: 15px;
  .icon-pr{
    padding-right: 10px;
  }
}

.order-box{
  display: flex;
  .item{
    flex: 1;
    text-align: center;
  }
}
</style>
