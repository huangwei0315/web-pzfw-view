<script setup lang="ts">
import { ref, watchEffect } from 'vue'

import { orderstate } from './orderstate.ts'

const options = ref([
      {
        label: '中山医院',
        value: 1
      },
      {
        label: '曙光医院',
        value: 2
      },
      {
        label: '华山医院',
        value: 3
      },
      {
        label: '医院4',
        value: 4
      },
      {
        label: '医院5',
        value: 5
      },
      {
        label: '医院6',
        value: 6
      }
    ])

const value = ref(1)
watchEffect(() => {
  console.log('value:', value.value)
})

function onChange(value: any) {
  switch(value){
    case 1:orderstate.hospitaltemp = '中山医院';break;
    case 2:orderstate.hospitaltemp = '曙光医院';break;
    case 3:orderstate.hospitaltemp = '华山医院';break;
    case 4:orderstate.hospitaltemp = '医院4';break;
    case 5:orderstate.hospitaltemp = '医院5';break;
    case 6:orderstate.hospitaltemp = '医院6';break;
  }
  console.log('change:', value)
}
</script>
<template>
  <Radio vertical :options="options" v-model:value="value" @change="onChange" />
</template>