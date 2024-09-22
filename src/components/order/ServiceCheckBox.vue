<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const options = ref([
      {
        label: '计时陪诊',
        value: 1
      },
      {
        label: 'VIP陪诊',
        value: 2
      }
    ])

const value = ref([1]) // 多选框v-model
watchEffect(() => {
  console.log('value:', value.value)
})
</script>
<template>
  <Checkbox :options="options" v-model:value="value" />
</template>