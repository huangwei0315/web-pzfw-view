<script setup lang="ts">
import Steps from './Steps.vue'
defineProps<{ step: string }>()
</script>

<template>
  <Card v-if="step === 'step1'" :bordered="false">
    <Steps step="step1" />
  </Card>
  <Card v-else-if="step === 'step2'" :bordered="false">
    <Steps step="step2" />
  </Card>
  <Card v-else-if="step === 'step3'" :bordered="false">
    <Steps step="step3" />
  </Card>
  <Card v-else-if="step === 'step4'" :bordered="false">
    <Steps step="step4" />
  </Card>
</template>