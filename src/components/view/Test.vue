<script lang="ts" setup>
import { ref } from 'vue'

const open = ref(false)
const options = ref([
    {
      label: 'top',
      value: 'top'
    },
    {
      label: 'right',
      value: 'right'
    },
    {
      label: 'bottom',
      value: 'bottom'
    },
    {
      label: 'left',
      value: 'left'
    }
  ])
const footerPlacement = ref('right')
function onClose () {
  open.value = false
  console.log('close')
}
</script>
<template>
  <Radio v-model:value="footerPlacement" :options="options" style="margin-right: 8px;" />
  <Button type="primary" @click="open = true">Open</Button>
  <Drawer v-model:open="open" title="Basic Drawer" :placement="footerPlacement" :footer-style="{ textAlign: 'right' }">
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
    <template #footer>
      <Button style="margin-right: 8px" @click="onClose">Cancel</Button>
      <Button type="primary" @click="onClose">Submit</Button>
    </template>
  </Drawer>
</template>