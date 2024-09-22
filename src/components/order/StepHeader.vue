<script setup lang="ts">

// import { ref } from 'vue'
import { DoubleLeftOutlined } from '@ant-design/icons-vue'
import { orderstate } from './orderstate.ts'

defineProps<{ step: string }>()

function onclick (e: Event) {
  if(orderstate.step === '支付中'){
    // window.location.href = "#/payment"
    orderstate.step = '预约中'
  }
  console.log('change e:', e)
}

</script>

<template>
    <Button type="link" size="large" @click="onclick">
      <template #icon>
        <DoubleLeftOutlined />
      </template>
    </Button>
    <label style="font-size: 24px; font-Weight: bold; color: white">
      <span v-if="step === '预约中'">请您预约</span>
      <span v-else-if="step === '支付中'">请您支付</span>
      <span v-else-if="step === '服务中'">请您查看</span>
      <span v-else-if="step === '已完成'">请您评价</span>
    </label>

  <div class="flex-row-container">

    <!-- step1：提前预约 -->
    <span v-if="step === '预约中'">
      <div class="flex-row-item-column">
        <ul class="circle"><li>1</li></ul>
      </div>
      <div class="flex-row-item-column">
        <label class="label-style">预约</label>
      </div>
    </span>
    <span  v-else>
      <ul class="circle-disabled"><li>1</li></ul>
      <label class="label-disabled-style">预约</label>
    </span>

    <!-- step2：线上支付 -->
    <span v-if="step === '支付中'">
      <div class="flex-row-item-column">
        <ul class="circle"><li>2</li></ul>
      </div>
      <div class="flex-row-item-column">
        <label class="label-style">支付</label>
      </div>
    </span>
    <span  v-else>
      <ul class="circle-disabled"><li>2</li></ul>
      <label class="label-disabled-style">支付</label>
    </span>        

    <!-- step3：提供服务 -->
    <span v-if="step === '服务中'">
      <div class="flex-row-item-column">
        <ul class="circle"><li>3</li></ul>
      </div>
      <div class="flex-row-item-column">
        <label class="label-style">服务</label>
      </div>
    </span>
    <span  v-else>
      <ul class="circle-disabled"><li>3</li></ul>
      <label class="label-disabled-style">服务</label>
    </span>

    <!-- step4：服务完成 -->
    <span v-if="step === '已完成'">
      <div class="flex-row-item-column">
        <ul class="circle"><li>4</li></ul>
      </div>
      <div class="flex-row-item-column">
        <label class="label-style">完成</label>
      </div>
    </span>
    <span  v-else>
      <ul class="circle-disabled"><li>4</li></ul>
      <label class="label-disabled-style">完成</label>
    </span>

  </div>



</template>

<style scoped>

.flex-column-container {
  display: flex;
  flex-direction: column;
  width: 598px; 
  /* background: palevioletred; */
  border-radius: 10px;
}
 
.flex-column-item {
  margin: 1px; /* 可选，用于添加元素间隔 */
}

.flex-row-container {
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: space-between;

  color: palevioletred;
  background-color: pink;

  border: 1px solid pink; /* 边框 */
  padding: 5px; /* 内边距 */
  border-radius: 6px; /* 圆角 */
}

.flex-row-item-column {
  flex: 1; /* 让两列平分宽度 */
  margin: 1px; /* 可以根据需要调整间距 */
  padding: 1px; /* 内边距 */
  border: 0px solid #ccc; /* 边框 */
  /* text-align: center;
  align-items: center;
  justify-content: center; */
}

.circle li {
  /* list-style: none; */
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;
  width: 40px; /* 圆圈的直径 */
  height: 40px; /* 圆圈的直径 */
  border-radius: 50%; /* 圆形 */
  background-color: palevioletred; /* 圆圈的背景颜色 */
  color: pink; /* 文字颜色 */
  font-size: 20px; /* 文字大小 */
  font-Weight: bold;
  margin-right: 10px; 
}

.circle-disabled li {
  /* list-style: none; */
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;
  width: 40px; /* 圆圈的直径 */
  height: 40px; /* 圆圈的直径 */
  border-radius: 50%; /* 圆形 */
  background-color: gray; /* 圆圈的背景颜色 */
  color: pink; /* 文字颜色 */
  font-size: 20px; /* 文字大小 */
  font-Weight: bold;
  margin-right: 10px; 
}
.label-style {
  font-size: 20px;
  font-Weight: bold;
  color:black; 
}

.label-disabled-style {
  font-size: 20px;
  font-Weight: bold;
  color:gray; 
}
</style>