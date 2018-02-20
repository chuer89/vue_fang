<template>
  <div>
    <mt-tab-container class="page-tabbar-container" v-model="selected">
      <mt-tab-container-item id="外卖">
        <mt-cell v-for="n in 10" :title="'餐厅 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="订单">
        <mt-cell v-for="n in 5" :title="'订单 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="发现">
        <mt-cell v-for="n in 7" :title="'发现 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="我的">
        <div class="page-part">
          <mt-cell v-for="n in 12" :title="'我的 ' + n" />
        </div>
        <router-link to="/">
          <mt-button type="danger" size="large">退出</mt-button>
        </router-link>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
