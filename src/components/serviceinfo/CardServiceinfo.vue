<script setup lang="ts">
import Serviceinfo from './Serviceinfo.vue'
</script>

<template>
  <Card 
    :bordered="false"
    :headStyle="{  fontSize: '20px', color: 'black', backgroundColor: 'pink'}"
    :bodyStyle="{ backgroundColor: 'pink'}">
    <Serviceinfo />
  </Card>
</template>