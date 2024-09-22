<script setup lang="ts">
import { ref, watchEffect } from 'vue'

import { orderstate } from './orderstate.ts'

const options = ref([
      {
        label: '张 三',
        value: 1
      },
      {
        label: '李 四',
        value: 2
      },
      {
        label: '王 五',
        value: 3
      },
      {
        label: '就诊人4',
        value: 4
      },
      {
        label: '就诊人5',
        value: 5
      },
      {
        label: '就诊人6',
        value: 6
      }
    ])

const value = ref(1)
watchEffect(() => {
  console.log('value:', value.value)
})

function onChange(value: any) {
  switch(value){
    case 1:orderstate.patienttemp = '张 三';break;
    case 2:orderstate.patienttemp = '李 四';break;
    case 3:orderstate.patienttemp = '王 五';break;
    case 4:orderstate.patienttemp = '就诊人4';break;
    case 5:orderstate.patienttemp = '就诊人5';break;
    case 6:orderstate.patienttemp = '就诊人6';break;
  }
  console.log('change:', value)
}
</script>
<template>
  <Radio vertical :options="options" v-model:value="value" @change="onChange" />
</template>