<script setup lang="ts">
import { ref } from 'vue'
const customLoading =ref(false)
defineProps<{ step: string }>()
</script>

<template>
  <Space>
      <!-- step1：提前预约 -->
      <P v-if="step === 'step1'">
        <div>
          <Button  
            button-class="custom-btn-class" 
            ripple-color="#faad14"
            type="primary"
            shape="circle"
            size="large"
            :loading="customLoading"
          >1</Button>
          -------------
        </div>
        <div class="enabled-text">提前预约</div>
      </P>
      <P  v-else>
        <div>
          <Button  
            button-class="custom-btn-class"
            ripple-color="#faad14"
            type="primary"
            shape="circle"
            size="large"
            disabled="true"
            :loading="customLoading"
          >1</Button>
          -------------
        </div>
        <div class="disabled-text" >提前预约</div>
      </P>

      <!-- step2：线上支付 -->
      <P v-if="step === 'step2'">
        <div>
          <Button  
            button-class="custom-btn-class"
            ripple-color="#faad14"
            type="primary"
            shape="circle"
            size="large"
            :loading="customLoading"
          >2</Button>
          -------------
        </div>
        <div class="enabled-text">线上支付</div>
      </P>
      <P  v-else>
        <div>
          <Button  
            button-class="custom-btn-class"
            ripple-color="#faad14"
            type="primary"
            shape="circle"
            size="large"
            disabled="true"
            :loading="customLoading"
          >2</Button>
          -------------
        </div>
        <div class="disabled-text">线上支付</div>
      </P>

      <!-- step3：提供服务 -->
      <P v-if="step === 'step3'">
        <div>
          <Button  
            button-class="custom-btn-class"
            ripple-color="#faad14"
            type="primary"
            shape="circle"
            size="large"
            :loading="customLoading"
          >3</Button>
          -------------
        </div>
        <div class="enabled-text">提供服务</div>
      </P>
      <P  v-else>
        <div>
          <Button  
            button-class="custom-btn-class"
            ripple-color="#faad14"
            type="primary"
            shape="circle"
            size="large"
            disabled="true"
            :loading="customLoading"
          >3</Button>
          -------------
        </div>
        <div class="disabled-text">提供服务</div>
      </P>

      <!-- step4：服务完成 -->
      <P v-if="step === 'step4'">
        <div>
          <Button  
            button-class="custom-btn-class"
            ripple-color="#faad14"
            type="primary"
            shape="circle"
            size="large"
            :loading="customLoading"
          >4</Button>
        </div>
        <div class="enabled-text">服务完成</div>
      </P>
      <P  v-else>
        <div>
          <Button  
            button-class="custom-btn-class"
            ripple-color="#faad14"
            type="primary"
            shape="circle"
            size="large"
            disabled="true"
            :loading="customLoading"
          >4</Button>
        </div>
        <div class="disabled-text">服务完成</div>
      </P>
  </Space>
</template>

<style scoped>
.pink-background {
  background-color: #FF69B4; /* 粉红色的十六进制代码 */
}
.enabled-text {
  color: #1f32de;
}

.disabled-text {
  color: #908d8f;
}

.custom-btn-class{
  height: 40px;
  font-size: 18px;
  background: #faad14;
  border-color: #faad14;
  &:hover {
    background: #ffc53d;
    border-color: #ffc53d;
  }
  &:active {
    background: #d48806;
    border-color: #d48806;
  }
}
</style>