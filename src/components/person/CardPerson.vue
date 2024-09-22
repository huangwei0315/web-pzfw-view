<script setup lang="ts">
import PersonBase from './PersonBase.vue'
</script>

<template>
  <Card title="基本信息" :bordered="false">
    <template #extra><a href="#">下一页</a></template>
    <PersonBase />
  </Card>
</template>