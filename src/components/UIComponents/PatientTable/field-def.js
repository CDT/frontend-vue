export default [
  '__handle',
  {
    name: '__checkbox',
    titleClass: 'text-center',
    dataClass: 'text-center'
  },
  {
    name: 'patientId',
    title: '<span class="glyphicon glyphicon-tag"></span> 卡号',
    titleClass: 'text-center',
    dataClass: 'text-center'
  },
  {
    name: 'name',
    title: '<span class="glyphicon glyphicon-text-background"></span> 姓名',
    titleClass: 'text-center',
    dataClass: 'text-center full-name'
  },
  {
    name: 'gender',
    title: '<span class="glyphicon glyphicon-tag"></span> 性别',
    titleClass: 'text-center',
    dataClass: 'text-center',
    callback: 'genderLabel'
  },
  {
    name: '__slot:patient-current-status',
    title: '患者在院状态',
    titleClass: 'text-center',
    dataClass: 'text-center'
  },
  {
    name: 'dateOfBirth',
    title: '<span class="glyphicon glyphicon-tag"></span> 出生日期',
    titleClass: 'text-center',
    dataClass: 'text-center',
    callback: 'formatDate|YYYY年M月D日'
  },
  {
    name: 'idNumber',
    title: '<span class="glyphicon glyphicon-user"></span> 身份证',
    titleClass: 'text-center',
    dataClass: 'text-center',
    callback: 'onNullValue'
  },
  {
    name: 'phone',
    title: '<span class="glyphicon glyphicon-tag"></span> 手机号',
    titleClass: 'text-center',
    dataClass: 'text-center',
    callback: 'onNullValue'
  },
  {
    name: '__component:custom-actions-patient',
    title: '操作',
    titleClass: 'text-center',
    dataClass: 'text-center'
  }
]
