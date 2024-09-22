<script setup lang="ts">
import Title from './Title.vue'
</script>

<template>
  <Card title="基本信息" :bordered="false">
    <template #extra><a href="#">下一页</a></template>
    <Title />
  </Card>
</template>