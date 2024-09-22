import { reactive } from 'vue'

export const orderstate = reactive({

  username:'用户1',
  userid:'18666666666',
  phone: '18888666666',

  price: 199,
  step:'预约中',

  service: '请选择您要的陪诊服务',
  servicetemp: '请选择您要的陪诊服务',
  servicedefault:"请选择您要的陪诊服务",
  serviceflag: false,

  patient:'请选择就诊人',
  patienttemp:'请选择就诊人',
  patientdefalut:'请选择就诊人',
  patientflag:false,

  hospital:'请选择您要的就诊医院',
  hospitaltemp:'请选择您要的就诊医院',
  hospitaldefault:'请选择您要的就诊医院',
  hospitalflag: false,

  department:'请选择您要的就诊科室',
  departmenttemp:'请选择您要的就诊科室',
  departmentdefault:'请选择您要的就诊科室',
  departmentflag:false,

  datetime:'请选择您要的就诊时间',
  datetimetemp:'请选择您要的就诊时间',
  datetimedefualt:'请选择您要的就诊时间',
  datetimeflag:false,

  accompanyingphysician:'请选择您中意的陪诊师',
  accompanyingphysiciantemp:'请选择您中意的陪诊师',
  accompanyingphysiciandefault:'请选择您中意的陪诊师',
  accompanyingphysicianflag:false,

  localservice: false,
  phonereminder: false,
  stretcher: false,
  wheelchair: false,
  carshuttle:false,

})