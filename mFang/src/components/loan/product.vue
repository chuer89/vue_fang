<template>
  <div>
    <mt-header title="贷款产品">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <div class="product-list">
      <div class="item-box">
        <div class="item">
          <div>
            <img src="../../assets/product/01.jpg" alt="">
          </div>
          <p>买房贷款</p>
        </div>
        <div class="item">
          <div>
            <img src="../../assets/product/01.jpg" alt="">
          </div>
          <p>房贷计算</p>
        </div>
        <div class="item">
          <div>
            <img src="../../assets/product/01.jpg" alt="">
          </div>
          <p>营改增计算</p>
        </div>
      </div>
      <div class="item-box">
        <div class="item">
          <div>
            <img src="../../assets/product/01.jpg" alt="">
          </div>
          <p>购房能力评估</p>
        </div>
        <div class="item">
          <div>
            <img src="../../assets/product/01.jpg" alt="">
          </div>
          <p>买房流程</p>
        </div>
        <div class="item"></div>
      </div>
    </div>

    <div class="space-tips">
      <p>机构合作贷款3个</p>
    </div>

    <div class="product-org">
      <div class="item-box">
        <div class="icon-box">
          <div class="box">
            <img src="../../assets/product/org.jpg" alt="">
          </div>
        </div>
        <div class="content">
          <div class="box">
            <h3 class="title">房金贷（房产抵押贷）</h3>
            <div class="tips-box">
              <div class="tips">可贷<span class="mark">2-500万</span></div>
              <div class="tips">月费率<span class="mark">0.85%</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.product-list{
  padding: 10px 10px 10px 10px;
  .item-box{
    display: flex;
  }
  .item{
    flex: 1;
    text-align: center;
    color: #666;
    font-size: 14px;
    img{
      width: 70%;
    }
  }
}

.space-tips{
  color: #999999;
  font-size: 14px;
  background: #f0eff5;
  padding: 15px 10px;
}

.product-org{
  .item-box{
    display: flex;
    padding: 10px 0 10px 10px;
    .icon-box{
      flex: 1;
      text-align: center;
      .box{
        border: 1px solid #f0eff5;
        padding: 10px 0;
      }
      img{
        width: 70%;
      }
    }
    .content{
      flex: 5;
      .box{
        padding-left: 10px;
      }
      .title{
        color: #333333;
        font-size: 14px;
      }
      .tips-box{
        display: flex;
        .tips{
          flex: 1;
          color: #999999;
          font-size: 12px;
          .mark{
            color: #c1716a;
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>

