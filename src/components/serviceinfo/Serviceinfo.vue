<script setup lang="ts">

import { ref } from 'vue'
const discountedPrice =ref(199)
const productPrice =ref(299)

function onOrderButtonClick (e: Event) {
  window.location.href="#/order"
  console.log('change e:', e)
}

</script>

<template>

    <div class="header-style">
      <div style="font-size: 22px;">好医护计时陪诊  </div>
      <div>
        <label style="font-size: 22px;">￥{{ discountedPrice }}&nbsp;&nbsp;</label>
        <label style="font-size: 18px; text-decoration:line-through;color: lightgray;">￥{{ productPrice }}</label>
      </div>
    </div>
      
  <space vertical>

    <space>
      <space vertical>
        <label class="flex-item"></label>
        <label class="flex-item">-- 单次购买为2小时/199元</label>
        <label class="flex-item">-- 不足2小时按2小时收费</label>
        <label class="flex-item">-- 超时计费；25元/15分钟</label>
        <label class="flex-item">-- 超时每15分钟为一个结算点</label>
        <label class="flex-item">-- 不足15分钟按15分钟收费</label>
        <label class="flex-item">-- 至少提前24小时预约</label>
      </space>

      <space>
        <img src="../../assets/images/content/serviceinfo_background.jpg" class="logo" />
      </space>
    </space>
    
    <space>
      <span v-for="n in 15" :key="n"></span>

      <space>
        <div style="font-size: 18px;"><a href="#/">了解详情&nbsp;&nbsp;&nbsp;&nbsp;</a></div>
      </space>

      <space>
        <div><Button type="primary" size="large" @click="onOrderButtonClick">立即预约</Button></div>
      </space>
    </space>

  </space>
</template>

<style scoped>

.header-style {
  color: white;
  background-color: palevioletred;

  border: 1px solid pink; /* 边框 */
  padding: 5px; /* 内边距 */
  border-radius: 10px; /* 圆角 */
  text-align: center; /* 文本居中 */
}

.logo {
  height: 16em;
}

.flex-item {
  font-size: 18px;
  color: black;
}
</style>