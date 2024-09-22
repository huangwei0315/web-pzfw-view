<script setup lang="ts">
import { EnvironmentOutlined, RightOutlined } from '@ant-design/icons-vue'
</script>

<template>

  <div class="title-style">

      <space>
        <div style="font-size: 20px;color: white;">
          <span><EnvironmentOutlined /></span>
          <span>&nbsp;</span>
          <span>武汉市<RightOutlined /></span>
          <span v-for="n in 22" :key="n">&nbsp;</span>
        </div>
      </space>

      <space>
        <div style="font-size: 28px;color: white;">好医护</div>
        <span v-for="n in 5" :key="n">&nbsp;</span>
      </space>

      <space>
        <div style="font-size: 18px;color: white;">竭诚为你服务</div>
      </space>

  </div>
</template>

<style scoped>
.title-style {
  color: white;
  background-color: palevioletred;

  border: 0px solid pink; /* 边框 */
  padding: 5px; /* 内边距 */
  border-radius: 10px; /* 圆角 */
  text-align: left;

}
</style>