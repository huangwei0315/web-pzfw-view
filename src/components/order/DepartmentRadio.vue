<script setup lang="ts">
import { ref, watchEffect } from 'vue'

import { orderstate } from './orderstate.ts'

const options = ref([
      {
        label: '外科',
        value: 1
      },
      {
        label: '外科2',
        value: 2
      },
      {
        label: '外科3',
        value: 3
      },
      {
        label: '内科4',
        value: 4
      },
      {
        label: '内科5',
        value: 5
      },
      {
        label: '内科6',
        value: 6
      }
    ])

const value = ref(1)
watchEffect(() => {
  console.log('value:', value.value)
})

function onChange(value: any) {
  switch(value){
    case 1:orderstate.departmenttemp = '外科';break;
    case 2:orderstate.departmenttemp = '外科2';break;
    case 3:orderstate.departmenttemp = '外科3';break;
    case 4:orderstate.departmenttemp = '内科4';break;
    case 5:orderstate.departmenttemp = '内科5';break;
    case 6:orderstate.departmenttemp = '内科6';break;
  }
  console.log('change:', value)
}
</script>
<template>
  <Radio vertical :options="options" v-model:value="value" @change="onChange" />
</template>