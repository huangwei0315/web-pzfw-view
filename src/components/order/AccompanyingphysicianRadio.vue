<script setup lang="ts">
import { ref, watchEffect } from 'vue'

import { orderstate } from './orderstate.ts'

const options = ref([
      {
        label: '陪诊师1',
        value: 1
      },
      {
        label: '陪诊师2',
        value: 2
      },
      {
        label: '陪诊师3',
        value: 3
      },
      {
        label: '陪诊师4',
        value: 4
      },
      {
        label: '陪诊师5',
        value: 5
      },
      {
        label: '陪诊师6',
        value: 6
      }
    ])

const value = ref(1)
watchEffect(() => {
  console.log('value:', value.value)
})

function onChange(value: any) {
  switch(value){
    case 1:orderstate.accompanyingphysiciantemp = '陪诊师1';break;
    case 2:orderstate.accompanyingphysiciantemp = '陪诊师2';break;
    case 3:orderstate.accompanyingphysiciantemp = '陪诊师3';break;
    case 4:orderstate.accompanyingphysiciantemp = '陪诊师4';break;
    case 5:orderstate.accompanyingphysiciantemp = '陪诊师5';break;
    case 6:orderstate.accompanyingphysiciantemp = '陪诊师6';break;
  }
  console.log('change:', value)
}
</script>
<template>
  <Radio vertical :options="options" v-model:value="value" @change="onChange" />
</template>