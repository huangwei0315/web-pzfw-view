<script setup lang="ts">


import { orderstate } from './orderstate.ts'

</script>

<template>
 
    <!-- 分割线 -->
    <Divider :border-width="2" border-style="dashed" />

    <Descriptions title="" vertical>
      <DescriptionsItem label="就诊人">{{ orderstate.patient }}</DescriptionsItem>
      <DescriptionsItem label="就诊服务">{{ orderstate.service }}</DescriptionsItem>
      <DescriptionsItem label="就诊医院">{{ orderstate.hospital }}</DescriptionsItem>
      <DescriptionsItem label="就诊科室">{{ orderstate.department }}</DescriptionsItem>  
      <DescriptionsItem label="陪诊师">{{ orderstate.accompanyingphysician }}</DescriptionsItem>  
      <DescriptionsItem label="就诊时间" :span="2">{{ orderstate.datetime }}</DescriptionsItem>
      <DescriptionsItem label="本地话服务" :span="3">{{ orderstate.localservice }}</DescriptionsItem>
    </Descriptions>

</template>

<style scoped>
</style>