<script setup lang="ts">
import { ref, watchEffect } from 'vue'

import { orderstate } from './orderstate.ts'

const options = ref([
      {
        label: '计时陪诊',
        value: 1
      },
      {
        label: '陪诊服务2',
        value: 2
      },
      {
        label: '陪诊服务3',
        value: 3
      },
      {
        label: '陪诊服务4',
        value: 4
      },
      {
        label: '陪诊服务5',
        value: 5
      },
      {
        label: '陪诊服务6',
        value: 6
      }
    ])
const value = ref(1)
watchEffect(() => {
  console.log('value:', value.value)
})
function onChange(value: any) {
  switch(value){
    case 1:orderstate.servicetemp = '计时陪诊';break;
    case 2:orderstate.servicetemp = '陪诊服务2';break;
    case 3:orderstate.servicetemp = '陪诊服务3';break;
    case 4:orderstate.servicetemp = '陪诊服务4';break;
    case 5:orderstate.servicetemp = '陪诊服务5';break;
    case 6:orderstate.servicetemp = '陪诊服务6';break;
  }
  console.log('change:', value)
}
</script>
<template>
  <Radio vertical :options="options" v-model:value="value" @change="onChange" />
</template>