<script setup lang="ts">
import Service from './Service.vue'

function onOrderButtonClick (e: Event) {
  window.location.href="#/order"
  console.log('change e:', e)
}
</script>

<template>
  <Card 
    title="" 
    :bordered="false"
    :headStyle="{ fontSize: '20px', color: '#fff', backgroundColor: 'pink'}"
    :bodyStyle="{ backgroundColor: 'pink'}">
    <template #extra>
      <!-- <a href="#">点我预约</a> -->
      <space style="font-size: 22px;color: palevioletred;">告诉我您的需求：</space>
      <Button type="danger" size="large" @click="onOrderButtonClick">点我预约</Button>
    </template>
    <Service />
  </Card>
</template>