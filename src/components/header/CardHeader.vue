<script setup lang="ts">
import Header from './Header.vue'
</script>

<template>
  <Card 
    size="small" 
    :bordered="false" 
    :headStyle="{ backgroundColor: 'pink'}"
    :bodyStyle="{ backgroundColor: 'pink'}">
    <Header />
  </Card>
</template>