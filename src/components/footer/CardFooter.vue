<script setup lang="ts">
import Footer from './Footer.vue'
</script>

<template>
  <Card 
    title="" 
    size="small" 
    :bordered="false"
    :headStyle="{  fontSize: '2px', color: 'black', backgroundColor: 'palevioletred'}"
    :bodyStyle="{ backgroundColor: 'palevioletred'}">
    <Footer />
  </Card>
</template>