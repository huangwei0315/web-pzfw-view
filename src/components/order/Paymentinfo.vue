<script setup lang="ts">

// import { ref } from 'vue'
// import { RightCircleFilled, RightOutlined } from '@ant-design/icons-vue'

import { orderstate } from './orderstate.ts'

// 立即支付 按下
function onPaymentButtonClick (e: Event) {
  // window.location.href = "#/payment"
  orderstate.step = '服务中'
  console.log('change e:', e)
}

</script>

<template>

  <!-- 列排序 -->
  <div class="flex-column-container">

    <!-- 分割线 -->
    <!-- <Divider :border-width="4" border-style="dashed" /> -->

    <!-- 行排序 -->
    <div class="flex-column-item">

      <div class="flex-row-container">

        <Descriptions title="陪诊服务详情" size="default">
          <DescriptionsItem label="就诊人">{{ orderstate.patient }}</DescriptionsItem>
          <DescriptionsItem label="陪诊服务">{{ orderstate.service }}</DescriptionsItem>
          <DescriptionsItem label="陪诊师">{{ orderstate.accompanyingphysician }}</DescriptionsItem>  
          
          <DescriptionsItem label="就诊医院" :span="2">{{ orderstate.hospital }}</DescriptionsItem>
          <DescriptionsItem label="就诊科室">{{ orderstate.department }}</DescriptionsItem>  

          <DescriptionsItem label="就诊时间" :span="3">{{ orderstate.datetime }}</DescriptionsItem>

          <DescriptionsItem label="本地话服务" v-if="orderstate.localservice">需要</DescriptionsItem>
          <DescriptionsItem label="本地话服务" v-else="orderstate.localservice">不需要</DescriptionsItem>
          <DescriptionsItem label="电话提醒"  v-if="orderstate.phonereminder">需要</DescriptionsItem>
          <DescriptionsItem label="电话提醒"  v-else="orderstate.phonereminder">不需要</DescriptionsItem>
          <DescriptionsItem label="专车接送" v-if="orderstate.carshuttle">需要</DescriptionsItem>
          <DescriptionsItem label="专车接送" v-else="orderstate.carshuttle">不需要</DescriptionsItem>

          <DescriptionsItem label="担架" v-if="orderstate.stretcher">需要</DescriptionsItem>
          <DescriptionsItem label="担架" v-else="orderstate.stretcher">不需要</DescriptionsItem>
          <DescriptionsItem label="轮椅" v-if="orderstate.wheelchair">需要</DescriptionsItem>
          <DescriptionsItem label="轮椅" v-else="orderstate.wheelchair">不需要</DescriptionsItem>

        </Descriptions>
      </div>

    </div>

    <!-- 行排序 -->
    <div class="flex-column-item">
      <div class="flex-row-container">
        <label class="label-style">预计：￥{{ orderstate.price }}</label>
        <Button type="primary" size="large" @click="onPaymentButtonClick">立即支付</Button>
      </div>
    </div>

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