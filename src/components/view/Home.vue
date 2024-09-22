<script setup lang="ts">
import Title from '../title/Title.vue'
import Header from '../header/Header.vue'
import Footer from '../footer/Footer.vue'

import CardService from '../service/CardService.vue'
import CardServiceinfo from '../serviceinfo/CardServiceinfo.vue'
</script>

<template> 
  <div class="flex-container">
    <!-- todo：title -->
    <div class="flex-item"><Title /></div>
    <!-- todo：header -->
    <div class="flex-item"><Header /></div>
    <!-- todo：服务 -->
    <div class="flex-item"><CardService /></div>

    <!-- todo：服务详情 -->
    <div class="flex-item"><CardServiceinfo /></div>

    <!-- todo：footer -->
    <div class="flex-item"><Footer /></div>
  </div>
</template>

<style>
.flex-container {
  display: flex;
  flex-direction: column;
  width: 600px; 
  background: palevioletred;
  border-radius: 8px;
}
 
.flex-item {
  margin: 1.5px; /* 可选，用于添加元素间隔 */
}
</style>
