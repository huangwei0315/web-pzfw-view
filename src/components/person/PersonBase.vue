<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { UserOutlined, PhoneOutlined, HomeOutlined } from '@ant-design/icons-vue'
// import { format } from 'date-fns'
// const sizeOptions = [
//   {
//     label: 'small',
//     value: 'small'
//   },
//   {
//     label: 'middle',
//     value: 'middle'
//   },
//   {
//     label: 'large',
//     value: 'large'
//   }
// ]

const sexOptions = [
  {
    label: '男士',
    value: '男士'
  },
  {
    label: '女士',
    value: '女士'
  }
]

// const value = ref('')

const size = ref('large')
const username = ref('')
const selectedSex = ref('')
const phone = ref('')
const address = ref('')
const birthday = ref('')
const age = ref('')

watchEffect(() => {
  console.log('birthday:', birthday.value)

  // if (this.birthday) {
  //   const diff = Math.abs(new Date() - new Date(this.birthday));
  //   age = diff / (1000 * 60 * 60 * 24);
  // }
  console.log('age:', age.value)
})

// function onChange (e: Event) {
//   console.log('change e:', e)
// }
// function onEnter (e: KeyboardEvent) {
//   console.log('enter e:', e)
// }
</script>

<template>

  <Space gap="small" vertical :width="440">

    <!-- 显示设置 -->
    <!-- <Radio :options="sizeOptions" v-model:value="size" button button-style="solid" /> -->

    <!-- 性别 -->
    <Radio 
      :options="sexOptions" v-model:value="selectedSex" :size="size" :width="200" placeholder="性别">
    </Radio>

    <!-- 姓名 -->
    <Input v-model:value="username" :size="size" :width="200" :maxlength="10" placeholder="姓名">
      <template #addonBefore><UserOutlined /></template>
    </Input>

    <!-- 出生日期 -->
    <DatePicker v-model="birthday" :size="size" :width="200" placeholder="出生日期" format="yyyy-MM-dd" />
    <!-- <DatePicker v-model:value="birthday" :size="size" :width="200" placeholder="出生日期" format="yyyy-MM-dd" /> -->

    <!-- 电话 -->
    <Input 
      v-model:value="phone" :size="size" :width="200":maxlength="11" placeholder="电话">
      <template #addonBefore><PhoneOutlined /></template>
    </Input>

    <!-- 详细地址 -->
    <Input v-model:value="address" :size="size" placeholder="详细地址">
      <template #addonBefore><HomeOutlined /></template>
    </Input>

    <!-- 分割线 -->
    <Divider :border-width="2" border-style="dashed" />

    <Descriptions title="" vertical>
      <DescriptionsItem label="姓名">{{ username }}</DescriptionsItem>
      <DescriptionsItem label="性别">{{ selectedSex }}</DescriptionsItem>
      <DescriptionsItem label="生日">{{ birthday }}</DescriptionsItem>
      <DescriptionsItem label="年龄">{{ age }}</DescriptionsItem>  
      <DescriptionsItem label="电话" :span="2">{{ phone }}</DescriptionsItem>
      <DescriptionsItem label="详细地址" :span="3">{{ address }}</DescriptionsItem>
    </Descriptions>

  </Space>
 
</template>