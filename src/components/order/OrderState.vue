<script setup lang="ts">
import { orderstate } from './orderstate.ts'

import StepHeader from './StepHeader.vue';
import Orderinfo from './Orderinfo.vue';
import Paymentinfo from './Paymentinfo.vue';
</script>

<template>
  <StepHeader :step="orderstate.step"/>

  <Orderinfo v-if="orderstate.step ==='预约中'" />
  <Paymentinfo v-if="orderstate.step ==='支付中'" />
</template>

<style scoped>

</style>