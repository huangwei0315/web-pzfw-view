<script setup lang="ts">

import { ref } from 'vue'
import { RightOutlined } from '@ant-design/icons-vue'

import { orderstate } from './orderstate.ts'

import ServiceRadio from './ServiceRadio.vue';
import HospitalRadio from './HospitalRadio.vue';
import PatientRadio from './PatientRadio.vue';
import DepartmentRadio from './DepartmentRadio.vue';
import AccompanyingphysicianRadio from './AccompanyingphysicianRadio.vue';

const showAgreevWarning = ref(false)

const showMessage = ref(false)
const showMessage1 = ref(false)
const showMessage2 = ref(false)

const agreevalue = ref() // 多选框v-model

const agreeflag = ref(true)

// 立即预约 按下
function onOrderButtonClick (e: Event) {
  agreeflag.value = true

  if(orderstate.service !== orderstate.servicedefault) agreeflag.value = false
  else if(orderstate.patient !== orderstate.patientdefalut) agreeflag.value = false
  else if(orderstate.hospital !== orderstate.hospitaldefault) agreeflag.value = false
  else if(orderstate.department !== orderstate.departmentdefault) agreeflag.value = false
  else if(orderstate.datetime !== orderstate.datetimedefualt) agreeflag.value = false
  else if(orderstate.accompanyingphysician !== orderstate.accompanyingphysiciandefault) agreeflag.value = false

  if(agreevalue.value) {
    if(agreeflag.value){
      // window.location.href = "#/payment"
      orderstate.step = '支付中'
    }
  } else {
    showAgreevWarning.value = true
  }
  console.log('change e:', e)
}

// 条款同意否
const options = ref([
      {
        label: '',
        value: 1
      }
    ])


function onCancel () {
  if (orderstate.serviceflag) orderstate.serviceflag = false
  if (orderstate.patientflag) orderstate.patientflag = false
  if (orderstate.hospitalflag) orderstate.hospitalflag = false
  if (orderstate.departmentflag) orderstate.departmentflag = false
  if (orderstate.datetimeflag) orderstate.datetimeflag = false
  if (orderstate.accompanyingphysicianflag) orderstate.accompanyingphysicianflag = false
  
  console.log('cancel')
}

function onClose () {

  if(showAgreevWarning.value) {
    showAgreevWarning.value = false
  } else if (orderstate.serviceflag) {
    orderstate.serviceflag = false
    orderstate.service =orderstate.servicetemp
  } else if (orderstate.patientflag) {
    orderstate.patientflag = false
    orderstate.patient =orderstate.patienttemp
  } else if (orderstate.hospitalflag) {
    orderstate.hospitalflag = false
    orderstate.hospital =orderstate.hospitaltemp
  } else if (orderstate.departmentflag) {
    orderstate.departmentflag = false
    orderstate.department =orderstate.departmenttemp
  } else if (orderstate.datetimeflag) {
    orderstate.datetimeflag = false
    orderstate.datetime =orderstate.datetimetemp
  } else if (orderstate.accompanyingphysicianflag) {
    orderstate.accompanyingphysicianflag = false
    orderstate.accompanyingphysician =orderstate.accompanyingphysiciantemp
  }
  
  console.log('close')
}

</script>

<template>

  <Drawer v-model:open="orderstate.patientflag" title="请选择就诊人" placement="left">
    <PatientRadio />
    <template #footer>
      <Button style="margin-right: 8px" @click="onCancel">Cancel</Button>
      <Button type="primary" @click="onClose">Submit</Button>
    </template>
  </Drawer>

  <Drawer v-model:open="orderstate.serviceflag" title="请选择您要的陪诊服务" placement="left">
    <ServiceRadio />
    <template #footer>
      <Button style="margin-right: 8px" @click="onCancel">Cancel</Button>
      <Button type="primary" @click="onClose">Submit</Button>
    </template>
  </Drawer>

  <Drawer v-model:open="orderstate.hospitalflag" title="请选择您就诊的医院" placement="left">
    <HospitalRadio />
    <template #footer>
      <Button style="margin-right: 8px" @click="onCancel">Cancel</Button>
      <Button type="primary" @click="onClose">Submit</Button>
    </template>
  </Drawer>

  <Drawer v-model:open="orderstate.departmentflag" title="请选择就诊科室" placement="left">
    <DepartmentRadio />
    <template #footer>
      <Button style="margin-right: 8px" @click="onCancel">Cancel</Button>
      <Button type="primary" @click="onClose">Submit</Button>
    </template>
  </Drawer>

  <Drawer v-model:open="orderstate.accompanyingphysicianflag" title="请选择您要的陪诊师" placement="left">
    <AccompanyingphysicianRadio />
    <template #footer>
      <Button style="margin-right: 8px" @click="onCancel">Cancel</Button>
      <Button type="primary" @click="onClose">Submit</Button>
    </template>
  </Drawer>
  
  <Drawer v-model:open="showMessage" title="注意事项说明" placement="left">
    <space vertical>
      <p>1.此服务根据所选服务内容统计计费，如有疑问请及时联系客服。客服电话：XXX-XXXXXXX</p>
      <p></p>
      <p>2.下单成功后，因个人原因，就诊时间前12小时内取消预约，扣除5%服务费用。</p>
      <p></p>
      <p>3.下单成功后，因个人原因，就诊时间前6小时内取消预约，扣除10%服务费用。</p>
    </space>
  </Drawer>

  <Drawer v-model:open="showMessage1" title="个人隐私保护条例" placement="left">
    <space vertical>
      <p>1.xxxxxxx</p>
      <p></p>
      <p>2.xxxxxxx</p>
      <p></p>
      <p>3.xxxxxxxxxx</p>
    </space>
  </Drawer>

  <Drawer v-model:open="showMessage2" title="服务条款同意书" placement="left">
    <space vertical>
      <p>1.xxxxxxx</p>
      <p></p>
      <p>2.xxxxxxx</p>
      <p></p>
      <p>3.xxxxxxxxxx</p>
    </space>
  </Drawer>


  <!-- 列排序 -->
  <div class="flex-column-container">

    <!-- 行排序 -->
    <div class="flex-column-item">
      <div class="flex-row-container">
        <label class="label-style">就诊人</label>
        <span>
          <label class="label-style">{{ orderstate.patient }}</label>
          <Button type="link" size="small" @click="orderstate.patientflag=true">
            <template #icon>
              <RightOutlined />
            </template>
          </Button>
        </span>
      </div>
    </div>

    <!-- 行排序 -->
    <div class="flex-column-item">
      <div class="flex-row-container">
        <label class="label-style">陪诊服务</label>

        <span>
          <label class="label-style">{{ orderstate.service }}</label>
          <Button type="link" size="small" @click="orderstate.serviceflag=true">
            <template #icon>
              <RightOutlined />
            </template>
          </Button>
        </span>

      </div>
    </div>

    <!-- 行排序 -->
    <div class="flex-column-item">
      <div class="flex-row-container">
        <label class="label-style">就诊医院</label>
        <span>
          <label class="label-style">{{ orderstate.hospital }}</label>
          <Button type="link" size="small" @click="orderstate.hospitalflag=true">
            <template #icon>
              <RightOutlined />
            </template>
          </Button>
        </span>
      </div>
    </div>

    <!-- 行排序 -->
    <div class="flex-column-item">
      <div class="flex-row-container">
        <label class="label-style">就诊科室</label>
        <span>
          <label class="label-style">{{ orderstate.department }}</label>
          <Button type="link" size="small" @click="orderstate.departmentflag=true">
            <template #icon>
              <RightOutlined />
            </template>
          </Button>
        </span>
      </div>
    </div>

    <!-- 行排序 -->
    <div class="flex-column-item">
      <div class="flex-row-container">
        <label class="label-style">就诊时间</label>
        <span>
          <label class="label-style">{{ orderstate.datetime }}</label>
          <Button type="link" size="small" @click="orderstate.datetimeflag=true">
            <template #icon>
              <RightOutlined />
            </template>
          </Button>
        </span>
      </div>
    </div>

    <!-- 行排序 -->
    <div class="flex-column-item">
      <div class="flex-row-container">
        <label class="label-style">陪诊师</label>
        <span>
          <label class="label-style">{{ orderstate.accompanyingphysician }}</label>
          <Button type="link" size="small" @click="orderstate.accompanyingphysicianflag=true">
            <template #icon>
              <RightOutlined />
            </template>
          </Button>
        </span>
      </div>
    </div>

    <!-- 行排序 -->
    <div class="flex-column-item">
      <div class="flex-row-container">
        <label class="label-style">是否需要本地话服务</label>
        <span><Switch v-model="orderstate.localservice"></Switch>&nbsp;</span>
      </div>
    </div>

    <!-- 行排序 -->
    <div class="flex-column-item">
      <div class="flex-row-container">
        <label class="label-style">是否需要电话提醒</label>
        <span><Switch v-model="orderstate.phonereminder"></Switch>&nbsp;</span>
      </div>
    </div>

    <!-- 行排序 -->
    <div class="flex-column-item">
      <div class="flex-row-container">
        <label class="label-style">是否需要担架</label>
        <span><Switch v-model="orderstate.stretcher"></Switch>&nbsp;</span>
      </div>
    </div>

    <!-- 行排序 -->
    <div class="flex-column-item">
      <div class="flex-row-container">
        <label class="label-style">是否需要轮椅</label>
        <span><Switch v-model="orderstate.wheelchair"></Switch>&nbsp;</span>
      </div>
    </div>

    <!-- 行排序 -->
    <div class="flex-column-item">
      <div class="flex-row-container">
        <label class="label-style">是否需要专车接送</label>
        <span><Switch v-model="orderstate.carshuttle"></Switch>&nbsp;</span>
      </div>
    </div>

    <!-- <h3 @click="showMessage = true"><a>注意事项说明</a></h3>  -->
    <h3>
      &nbsp;&nbsp;&nbsp;<Checkbox :options="options" v-model:value="agreevalue" />
      我已阅读并同意陪诊服务相关个人
      <a @click="showMessage1 = true">《个人隐私保护政策》</a>
      和
      <a @click="showMessage2 = true">《服务条款同意书》</a>
    </h3>
    <Alert
        message="请仔细阅读并同意陪诊服务相关个人《个人隐私保护政策》和《服务条款同意书》"
        type="warning"
        closable
        @close="onClose"
        v-if ="showAgreevWarning"
    />

    <!-- 行排序 -->
    <div class="flex-column-item">
      <div class="flex-row-container">
        <label class="label-style">预计：￥{{ orderstate.price }}</label>
        <Button type="primary" size="large" @click="onOrderButtonClick">立即预约</Button>
      </div>
    </div>

  </div>

</template>

<style scoped>

.flex-column-container {
  display: flex;
  flex-direction: column;
  width: 598px; 
  /* background: palevioletred; */
  border-radius: 10px;
}
 
.flex-column-item {
  margin: 1px; /* 可选，用于添加元素间隔 */
}

.flex-row-container {
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: space-between;

  color: palevioletred;
  background-color: pink;

  border: 1px solid pink; /* 边框 */
  padding: 5px; /* 内边距 */
  border-radius: 6px; /* 圆角 */
}

.flex-row-item-column {
  flex: 1; /* 让两列平分宽度 */
  margin: 1px; /* 可以根据需要调整间距 */
  padding: 1px; /* 内边距 */
  border: 0px solid #ccc; /* 边框 */
  /* text-align: center;
  align-items: center;
  justify-content: center; */
}

.circle li {
  /* list-style: none; */
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;
  width: 40px; /* 圆圈的直径 */
  height: 40px; /* 圆圈的直径 */
  border-radius: 50%; /* 圆形 */
  background-color: palevioletred; /* 圆圈的背景颜色 */
  color: pink; /* 文字颜色 */
  font-size: 20px; /* 文字大小 */
  font-Weight: bold;
  margin-right: 10px; 
}

.circle-disabled li {
  /* list-style: none; */
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;
  width: 40px; /* 圆圈的直径 */
  height: 40px; /* 圆圈的直径 */
  border-radius: 50%; /* 圆形 */
  background-color: gray; /* 圆圈的背景颜色 */
  color: pink; /* 文字颜色 */
  font-size: 20px; /* 文字大小 */
  font-Weight: bold;
  margin-right: 10px; 
}
.label-style {
  font-size: 20px;
  font-Weight: bold;
  color:black; 
}

.label-disabled-style {
  font-size: 20px;
  font-Weight: bold;
  color:gray; 
}
</style>