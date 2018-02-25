<template>
  <div>
    <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
      <router-link to="/person" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="credit-header">
      <div class="grade-box">
        <div class="grade-content">
          <div class="grade-num">E</div>
          <div>有待提升</div>
        </div>
      </div>
      <div class="evaluate-box">
        <div class="tips-title">您的分析结果：</div>
        <p>您的综合信用带有提供，查询全部包裹项目，有利于帮助你的评估</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'credit'
};
</script>
<style lang="scss" scoped>
.credit-header{
  display: flex;
  background: #fd5147;
  align-items: center;
  padding: 20px 0;
  .grade-box{
    flex: 1;
    color: #ed3444;
    font-size: 12px;
    .grade-content{
      background: white;
      text-align: center;
      margin: 0 auto;
      width: 2rem;
      height: 2rem;
      border-radius: 1rem;
    }
    .grade-num{
      font-size: 28px;
      line-height: 28px;
      padding-top: 5px;
    }
  }
  .evaluate-box{
    flex: 2;
    color: white;
    font-size: 14px;
    .tips-title{
      font-size: 18px;
    }
  }
}
</style>
