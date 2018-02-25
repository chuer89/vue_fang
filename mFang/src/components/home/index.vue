<template>
  <div class="home">

    <div>
      <img class="header-img" src="../../assets/home/logo.jpg"  alt="">
    </div>
    <img class="banner-img" src="../../assets/home/banner.jpg"  alt="">

    <div class="apply-limit">
      <p class="tips">测试您的贷款额度（元）</p>
      <div>
        <input type="text" class="num" v-model="limit">
      </div>
      <div class="apply">
        <mt-button size="large" @click="toApply" class="apply-btn">立即申请</mt-button>
      </div>
    </div>
    <div class="product-info">
      <mt-cell
      is-link
      to="product"
      title="热门贷款产品"></mt-cell>

      <div class="product-box">
        <div class="item">
          <div>
            <img src="../../assets/home/01.jpg" alt="">
          </div>
          <p class="info">房产抵押贷</p>
          <p class="tips">最快放贷款</p>
        </div>
        <div class="item">
          <div>
            <img src="../../assets/home/02.jpg" alt="">
          </div>
          <p class="info">房产信用贷</p>
          <p class="tips">额高度</p>
        </div>
        <div class="item">
          <div>
            <img src="../../assets/home/03.jpg" alt="">
          </div>
          <p class="info">贷款流程</p>
          <p class="tips">简单快捷</p>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      limit: '500,000',
      bannerImg: '../../assets/home/banner.jpg'
    };
  },
  methods: {
    toApply () {
      window.router.push({ path: 'apply' });
    },

    toProduct () {
      window.router.push({
        path: 'product'
      });
    }
  }
};
</script>

<style lang="scss" scoped>
  .home{
    background: #f5f5f5;
  }
  .banner-img{
    width: 100%;
    min-height: 80px;
  }
  .header-img{
    width: 100%;
  }

  .apply{
    width: 80%;
    margin: 0 auto;
    .apply-btn{
      background: #8066ff;
      color: white;
      &:active{
        color: white;
      }
    }
  }

  .apply-limit{
    text-align: center;
    margin-top: 10px;
    background: white;
    padding: 10px 0;
    .tips{
      font-size: 16px;
      color: #333333;
    }
    .num{
      color: #999;
      font-size: 50px;
      width: 80%;
      text-align: center;
    }
  }

  .product-info{
    margin: 10px auto;
    background: white;
    .product-box{
      display: flex;
      padding: 0 10px;
      .item{
        flex: 1;
        text-align: center;
        img{
          width: 70%;
        }
        .info{
          color: #333333;
          font-size: 16px;
        }
        .tips{
          color: #999999;
          font-size: 14px;
        }
      }
    }
  }
</style>
