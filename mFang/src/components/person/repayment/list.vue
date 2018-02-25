<template>
  <div class="gray-bg">
    <mt-header title="待还款">
      <router-link to="/person" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="amount-box">
      <div class="tips">还款总额</div>
      <div class="sum-amount">
        <span class="sum">50,000</span><span class="unit">元</span>
      </div>
      <div>
        <mt-button size="normal" plain class="refund-btn">立即还款</mt-button>
      </div>
    </div>
    <div class="list-box">
      <div class="title-box">
        <div class="name">放鸡精贷款</div>
        <div class="plan">还款计划</div>
      </div>
      <div class="content">
        <div class="info-box">
          <div class="money">5200</div>
          <div>还款金额</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'repaymentList'
};
</script>
<style lang="scss" scoped>
.amount-box{
  color: white;
  background: #764ffa;
  text-align: center;
  padding: 20px 0 50px 0;
  .sum-amount{
    padding: 15px 0;
  }
  .sum{
    font-size: 48px;
  }
  .unit{
    font-size: 12px;
  }
  .refund-btn{
    color: white;
    border-color: white;
    padding: 0 20px;
  }
  .tips{
    font-size: 16px;
  }
}
.list-box{
  background: white;
  margin-top: 10px;
  .title-box{
    display: flex;
    color: #333333;
    font-size: 16px;
    .name{
      flex: 3;
    }
    .plan{
      flex: 1;
      text-align: right;
    }
  }
  .content{
    display: flex;
    .info-box{
      flex: 1;
      color: #999999;
      font-size: 14px;
      .money{
        color: #fd5147;
      }
    }
  }
}
</style>
